#!/usr/bin/env node
// Ingest WhatsApp export drops from inbox/ into posts.js + public/ assets.
//
// Expects in inbox/:
//   - chat.txt                  WhatsApp chat export (without media names)
//   - "WhatsApp Audio YYYY-MM-DD at HH.MM.SS.ext" files saved manually
//   - "WhatsApp Image YYYY-MM-DD at HH.MM.SS.ext" files saved manually
//
// For each burst of messages from Guille (audio + optional image + text sent
// within a few minutes) it copies the matching media into public/ named by
// date and prepends an entry to src/app/Data/posts.js with title "TODO".
// Dates already present in posts.js are skipped, so the script can be re-run
// as more media files are dropped into inbox/.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..");
const INBOX = path.join(ROOT, "inbox");
const POSTS_FILE = path.join(ROOT, "src/app/Data/posts.js");
const AUDIO_DIR = path.join(ROOT, "public/audio");
const IMAGE_DIR = path.join(ROOT, "public/images/tracks");

const BURST_WINDOW_MS = 5 * 60 * 1000;

// --- Parse chat.txt into messages ---

const chatPath = path.join(INBOX, "chat.txt");
if (!fs.existsSync(chatPath)) {
  console.error("No inbox/chat.txt found. Drop the WhatsApp export there first.");
  process.exit(1);
}

const HEADER_RE =
  /^\[(\d{1,2})\/(\d{1,2})\/(\d{2}), (\d{1,2}):(\d{2}):(\d{2})\s?(AM|PM)\] ([^:]+): (.*)$/;

const messages = [];
for (const line of fs.readFileSync(chatPath, "utf8").split("\n")) {
  const m = line.match(HEADER_RE);
  if (m) {
    const [, mo, d, y, h, min, s, ampm, sender, text] = m;
    let hour = Number(h) % 12;
    if (ampm === "PM") hour += 12;
    const ts = new Date(2000 + Number(y), Number(mo) - 1, Number(d), hour, Number(min), Number(s));
    messages.push({ ts, sender, text });
  } else if (messages.length > 0) {
    messages.at(-1).text += "\n" + line;
  }
}

// --- Group Guille's messages into bursts (one burst = one post) ---

const bursts = [];
for (const msg of messages) {
  if (msg.sender === "You") continue;
  const last = bursts.at(-1);
  if (last && msg.ts - last.ts <= BURST_WINDOW_MS) {
    last.messages.push(msg);
  } else {
    bursts.push({ ts: msg.ts, messages: [msg] });
  }
}

const isoDate = (ts) =>
  `${ts.getFullYear()}-${String(ts.getMonth() + 1).padStart(2, "0")}-${String(ts.getDate()).padStart(2, "0")}`;

const posts = bursts.flatMap((burst) => {
  let hasAudio = false;
  let hasImage = false;
  const textParts = [];
  for (const msg of burst.messages) {
    const text = msg.text.replace(/^\[Forwarded\]\s*/, "").trim();
    if (text.includes("<audio omitted>")) hasAudio = true;
    else if (text.includes("<image omitted>")) hasImage = true;
    else if (text !== "" && text !== "<unknown message>") textParts.push(text);
  }
  if (!hasAudio) return [];
  return [{ date: isoDate(burst.ts), ts: burst.ts, hasImage, content: textParts.join("\n") }];
});

// --- Index media files in inbox by date ---

const MEDIA_RE = /^WhatsApp (Audio|Image) (\d{4}-\d{2}-\d{2}) at \d{2}\.\d{2}\.\d{2}.*(\.\w+)$/;
const media = { Audio: new Map(), Image: new Map() };
for (const name of fs.readdirSync(INBOX)) {
  const m = name.match(MEDIA_RE);
  if (m) media[m[1]].set(m[2], { name, ext: m[3] });
}

// --- Build entries, copy media, skip already-published dates ---

const postsSource = fs.readFileSync(POSTS_FILE, "utf8");
const created = [];
const missing = [];

let entries = "";
for (const post of posts) {
  if (postsSource.includes(`date: "${post.date}"`)) continue;

  const audio = media.Audio.get(post.date);
  if (!audio) {
    missing.push(post);
    continue;
  }
  const image = post.hasImage ? media.Image.get(post.date) : undefined;

  fs.copyFileSync(path.join(INBOX, audio.name), path.join(AUDIO_DIR, post.date + audio.ext));
  if (image) {
    fs.copyFileSync(path.join(INBOX, image.name), path.join(IMAGE_DIR, post.date + image.ext));
  }

  const escaped = post.content.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  const side = Math.random() < 0.5 ? "left" : "right";
  const imageLines = image
    ? `    image: "/images/tracks/${post.date}${image.ext}",\n    imagePosition: "${side}", // left or right\n`
    : "";
  entries += `  {
    title: "TODO",
    date: "${post.date}", // Formato YYYY-MM-DD
${imageLines}    audio: "/audio/${post.date}${audio.ext}",
    content: \`
${escaped}\`,
  },
`;
  created.push(post);
}

if (entries) {
  const marker = "const posts = [\n";
  const idx = postsSource.indexOf(marker);
  if (idx === -1) {
    console.error("Could not find `const posts = [` in posts.js");
    process.exit(1);
  }
  const insertAt = idx + marker.length;
  fs.writeFileSync(POSTS_FILE, postsSource.slice(0, insertAt) + entries + postsSource.slice(insertAt));
}

// --- Report ---

for (const post of created) {
  console.log(`created  ${post.date}  (title: TODO${post.hasImage && !media.Image.get(post.date) ? ", image file missing" : ""})`);
}
for (const post of missing) {
  console.log(`missing  ${post.date}  audio file not in inbox/ — save it as "WhatsApp Audio ${post.date} at HH.MM.SS.mpeg" and re-run`);
}
if (created.length === 0 && missing.length === 0) {
  console.log("Nothing new to ingest.");
}
