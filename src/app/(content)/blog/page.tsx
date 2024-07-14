"use client";

import Image from "next/image";
import { ArticleType } from "@/types/Article";
import { usePosts } from "@/hooks/blog/usePosts";
import { dateHumanize } from "@/lib/date-helper";
import Link from "next/link";
import { SkeletonCard } from "@/components/skeleton-card";

// export const metadata = {
//   title: "Blog",
// };

export default function BlogPage() {
  const { isLoading, posts }: { isLoading: any; posts: ArticleType[] } =
    usePosts();

  return (
    <div className="container max-w-5xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          {/* <p className="text-xl text-muted-foreground">
            A blog built using Wordpress Articles fetched from niyazjamal.wordpress.com
          </p> */}
        </div>
      </div>
      <hr className="my-8" />
      {/* Loader */}
      {isLoading && (
        <div className="grid gap-10 sm:grid-cols-2">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {/* Articles */}
      {posts?.length && (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group relative flex flex-col space-y-2"
            >
              <Image
                src={
                  post.jetpack_featured_media_url !== ""
                    ? post.jetpack_featured_media_url
                    : "/no-post.png"
                }
                alt={post.title.rendered}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
                priority={index <= 1}
              />

              <h2
                className="text-2xl font-extrabold"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h2>
              {post.excerpt.rendered && (
                <p
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {dateHumanize(post.modified)}
                </p>
              )}
              <Link
                href={`/blog/${post.id.toString()}`}
                className="absolute inset-0"
              >
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
