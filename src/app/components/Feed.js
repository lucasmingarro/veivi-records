'use client';

import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import postsData from "../Data/posts";
import { UilShare } from '@iconscout/react-unicons';
import toast from 'react-hot-toast';

export default function Feed({ scrollTarget, onContentLoaded }) {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    const sortedPosts = [...postsData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    ).map((post, index) => ({
      ...post,
      id: post.id || `post-${index}`
    }));

    setPosts(sortedPosts);

    if (scrollTarget) {
      // If there's a scroll target, load all posts immediately
      setVisiblePosts(sortedPosts);
      setHasMore(false);
    } else {
      setVisiblePosts(sortedPosts.slice(0, 5));
    }

    // Mark as loaded after a small delay to ensure rendering
    setTimeout(() => setIsLoaded(true), 50);
  }, [scrollTarget]);

  // Automatically expand the target post if it exists
  useEffect(() => {
    if (isLoaded && scrollTarget && !expandedPosts.includes(scrollTarget)) {
      const targetPost = posts.find(post => post.id === scrollTarget);
      if (targetPost && targetPost.content && targetPost.content.length > MAX_CHARACTERS) {
        setExpandedPosts(prev => [...prev, scrollTarget]);
      }
    }
  }, [isLoaded, scrollTarget, posts, expandedPosts]);

  // Track image loading for target post
  const handleImageLoad = (postId) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(postId);
      return newSet;
    });
  };

  // Notify parent when target post content is ready
  useEffect(() => {
    if (scrollTarget && isLoaded) {
      const targetPost = visiblePosts.find(post => post.id === scrollTarget);
      if (targetPost) {
        // If target post has image, wait for it to load
        if (targetPost.image) {
          if (loadedImages.has(targetPost.id)) {
            onContentLoaded && onContentLoaded();
          }
        } else {
          // No image, content is ready
          onContentLoaded && onContentLoaded();
        }
      }
    }
  }, [scrollTarget, isLoaded, visiblePosts, loadedImages, onContentLoaded]);

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
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleShare = (postId) => {
    const url = `${window.location.origin}?scrollTo=${postId}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Link copied!');
    }).catch(() => {
      toast.error('Error copying the link!');
    });
  };

  const MAX_CHARACTERS = 350;

  return (
    <section className="relative md:py-24 py-16" id="feed">
      <div className="container mx-auto px-4 max-w-screen-lg">
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
          style={{
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <div className="grid gap-8">
            {visiblePosts.map((post) => {
              const isExpanded = expandedPosts.includes(post.id);
              const isTargetPost = post.id === scrollTarget;
              const contentToDisplay = isExpanded
                ? post.content
                : `${post.content.slice(0, MAX_CHARACTERS)}...`;

              return (
                <div
                  key={post.id}
                  id={post.id}
                  className={`p-6 border rounded-lg shadow-md bg-white dark:bg-slate-900 dark:border-gray-800 transition-colors flex flex-col md:flex-row items-start md:items-start md:gap-6 gap-4 ${isTargetPost ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                    }`}
                >
                  {post.image && post.imagePosition === "left" && (
                    <div className="relative w-full md:w-auto sd:w-auto flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full max-w-[400px] object-contain rounded-md"
                        priority={isTargetPost}
                        onLoad={() => handleImageLoad(post.id)}
                        onError={() => handleImageLoad(post.id)}
                      />
                    </div>
                  )}
                  <div className="w-full flex-1">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-dark dark:text-white transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 dark:text-gray-400 transition-colors flex items-center">
                        {new Date(new Date(post.date).setHours(new Date(post.date).getHours() + 3)).toLocaleDateString('es-AR')}
                        <button
                          onClick={() => handleShare(post.id)}
                          title="Share"
                          className="ml-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                        >
                          <UilShare size="20" />
                        </button>
                      </p>
                    </div>
                    {post.audio && (
                      <ReactAudioPlayer
                        src={post.audio}
                        controls
                        preload={isTargetPost ? "auto" : "metadata"}
                        className="mb-4 w-full"
                      />
                    )}
                    {post.content && (
                      <div>
                        <p
                          className="text-gray-600 dark:text-gray-300 transition-colors mb-2"
                          style={{
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          {contentToDisplay}
                        </p>
                        {post.content.length > MAX_CHARACTERS && (
                          <button
                            onClick={() => toggleContent(post.id)}
                            className="w-full text-blue-500 dark:text-blue-400 hover:underline text-sm"
                            style={{
                              display: "block",
                              textAlign: "center",
                              maxWidth: "100%",
                              overflowWrap: "break-word",
                            }}
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
                    )}
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
                        priority={isTargetPost}
                        onLoad={() => handleImageLoad(post.id)}
                        onError={() => handleImageLoad(post.id)}
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
