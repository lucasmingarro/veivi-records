import "../app/assets/css/tailwind.css";
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google';
import Head from "next/head";
import { Toaster } from 'react-hot-toast'; // 👈 Importá el Toaster

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Veivi Records',
  description: 'Curated Music and more by Guille',
  openGraph: {
    type: "website",
    url: "https://veivirecords.com",
    title: "Veivi Records",
    description: "Curated Music and more by Guille",
    images: [
      {
        url: "https://veivirecords.com/images/vinyl-turntable.jpg",
        width: 1200,
        height: 630,
        alt: "Veivi Records Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veivi Records",
    description: "Curated Music and more by Guille",
    image: "https://veivirecords.com/images/vinyl-turntable.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* General Meta */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body
        className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#f9fafb',
              fontSize: '14px',
              padding: '10px 16px',
              borderRadius: '8px',
            },
          }}
        />
      </body>
    </html>
  );
}
