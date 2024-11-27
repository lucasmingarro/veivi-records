'use client';

import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import postsData from "../Data/posts";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
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
              Cargando más publicaciones...
            </p>
          }
          endMessage={
            <p className="text-center my-4 text-gray-600 dark:text-gray-400 transition-colors">
              ¡Ya viste todo!
            </p>
          }
        >
          <div className="grid gap-8">
            {visiblePosts.map((post, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md bg-white dark:bg-slate-900 dark:border-gray-800 transition-colors flex flex-col md:flex-row items-start md:items-start"
              >
                {post.image && post.imagePosition === "left" && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="md:w-1/2 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
                  />
                )}
                <div className="flex-1">
                  {/* Título y Fecha */}
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-dark dark:text-white transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 dark:text-gray-400 transition-colors">
                      {new Date(post.date).toLocaleDateString()}
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
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      {post.content}
                    </p>
                  )}
                </div>
                {post.image && post.imagePosition === "right" && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="md:w-1/2 h-48 object-cover rounded-md mt-4 md:mt-0 md:ml-4"
                  />
                )}
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
}
