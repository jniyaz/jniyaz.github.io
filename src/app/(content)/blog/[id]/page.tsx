// "use client";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { api } from "@/config/api";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
// import { usePost } from "@/hooks/blog/usePost";
import { dateHumanize } from "@/lib/date-helper";
import { buttonVariants } from "@/components/ui/button";

export const dynamicParams = true;

interface PostPageProps {
  params: { id: string };
}

// Generate segment for articles
export async function generateStaticParams() {
  const posts = await fetch(`${api.WP_BLOG_BASE_URL}/posts`).then((res) =>
    res.json()
  );

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  // using swr
  // const { isLoading, post } = usePost(params.id[0]);

  const res = await fetch(`${api.WP_BLOG_BASE_URL}/posts/${params.id}`, {
    next: { revalidate: 60, tags: ["collection"] },
  });

  const post = (await res.json()) as any;

  return (
    <>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex"
          )}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>

        {/* {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} */}

        {post && (
          <>
            <div>
              {post.modified && (
                <time
                  dateTime={post.modified}
                  className="block text-sm text-muted-foreground"
                >
                  Published on {dateHumanize(post.modified)}
                </time>
              )}
              <h1
                className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h1>

              <div className="mt-4 flex space-x-4">
                <Link
                  href={`${siteConfig.links.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src="https://avatars.githubusercontent.com/u/8238734?v=4"
                    alt={"niyaz"}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{"Niyaz"}</p>
                    <p className="text-[12px] text-muted-foreground">
                      {siteConfig.links.twitter}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )} */}
            {/* <Mdx code={post.body  .code} /> */}
            <hr className="my-4" />
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
              <Link
                href="/blog"
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
              </Link>
            </div>
          </>
        )}
      </article>
    </>
  );
}
