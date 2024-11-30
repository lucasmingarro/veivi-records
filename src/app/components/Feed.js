'use client';

import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import postsData from "../Data/posts";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]); // IDs de los posts expandidos
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const sortedPosts = [...postsData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setPosts(sortedPosts);
    setVisiblePosts(sortedPosts.slice(0, 5)); // Mostrar los primeros 5
  }, []);

  const loadMorePosts = () => {
    const currentLength = visiblePosts.length;
    const nextPosts = posts.slice(currentLength, currentLength + 5);
    setVisiblePosts((prev) => [...prev, ...nextPosts]);
    if (visiblePosts.length + nextPosts.length >= posts.length) {
      setHasMore(false);
    }
  };

  const toggleContent = (postId) => {
    setExpandedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId) // Quita el ID si ya está expandido
        : [...prev, postId] // Agrega el ID si no está expandido
    );
  };

  const MAX_CHARACTERS = 350;

  return (
    <section className="relative md:py-24 py-16" id="feed">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-center text-dark dark:text-white transition-colors">
          Veivi Music Feed
        </h2>
        <InfiniteScroll
          dataLength={visiblePosts.length}
          next={loadMorePosts}
          hasMore={hasMore}
          loader={
            <p className="text-center my-4 text-dark dark:text-gray-200 transition-colors">
              Loading ...
            </p>
          }
          endMessage={
            <p className="text-center my-4 text-gray-600 dark:text-gray-400 transition-colors">
              That&apos;s all folks!
            </p>
          }
        >
          <div className="grid gap-8">
            {visiblePosts.map((post) => {
              const isExpanded = expandedPosts.includes(post.id); // Comprueba si el post está expandido
              const contentToDisplay = isExpanded
                ? post.content
                : `${post.content.slice(0, MAX_CHARACTERS)}...`;

              return (
                <div
                  key={post.id}
                  className="p-6 border rounded-lg shadow-md bg-white dark:bg-slate-900 dark:border-gray-800 transition-colors flex flex-col md:flex-row items-start md:items-start md:gap-6 gap-4"
                >
                  {post.image && post.imagePosition === "left" && (
                    <div className="relative w-full md:w-auto sd:w-auto flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full max-w-[400px] object-contain rounded-md"
                      />
                    </div>
                  )}
                  <div className="w-full flex-1">
                    {/* Título y Fecha */}
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-dark dark:text-white transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 dark:text-gray-400 transition-colors">
                        {new Date(post.date).toLocaleDateString('es-AR')}
                      </p>
                    </div>
                    {/* Reproductor de Audio */}
                    {post.audio && (
                      <ReactAudioPlayer
                        src={post.audio}
                        controls
                        className="mb-4 w-full"
                      />
                    )}
                    {/* Texto de Contenido */}
                    {post.content && (
                      <div>
                        <p
                          className="text-gray-600 dark:text-gray-300 transition-colors mb-2"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {contentToDisplay}
                        </p>
                        {post.content.length > MAX_CHARACTERS && (
                          <button
                            onClick={() => toggleContent(post.id)}
                            className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
                    )}
                    {/* Archivos adjuntos */}
                    {post.attachments && post.attachments.length > 0 && (
                      <div className="mt-4">
                        <ul className="list-disc pl-5">
                          {post.attachments.map((attachment, index) => (
                            <li key={index}>
                              <a
                                href={attachment.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                {attachment.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {post.image && post.imagePosition === "right" && (
                    <div className="relative w-full md:w-auto sd:w-auto flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full max-w-[400px] object-contain rounded-md"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
}
