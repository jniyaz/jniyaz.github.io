import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Software Developer | Freelancer",
};

export default function IndexPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {"👋, I'm Niyaz, a Full-stack Developer."}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {"Transforming ideas into modern User Experiences"}
        </p>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {"Tech enthusiast with a passion for development."}
        </p>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {"Fan of React, Next, Laravel Tech stacks."}
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/works"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {"Works"}
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {"Follow on GitHub"}
          </Link>
          <Link
            href={siteConfig.links.twitter}
            rel="noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {"Follow on X"}
          </Link>
        </div>
      </div>
    </section>
  );
}
