import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Contact
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Let’s talk 👋
        </p>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <div className="space-x-4">
          <Link
            href={siteConfig.links.linkedin}
            rel="noreferrer"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-gray-700 dark:text-gray-400"
            )}
          >
            Let's Connect
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-gray-700 dark:text-gray-400"
            )}
          >
            {"Follow"}
          </Link>
        </div>
      </div>
    </section>
  );
}
