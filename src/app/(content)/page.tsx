import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/moving-borders";

export const metadata = {
  title: "Software Developer | Freelancer",
};

export default function IndexPage() {
  // const { theme } = useTheme();
  // console.log(theme)
  // bg-slate-50 py-8 dark:bg-transparent

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="p-8"
        >
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {"👋, I’m Niyaz"}
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {"Full-stack software engineer"}
            </p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {
                "Spend days designing and developing web and mobile applications."
              }
            </p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {"Transforming ideas into modern User Experiences."}
            </p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {"Tech enthusiast with a passion for development."}
            </p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {"Fan of React, Next, Laravel, Cloud tech stacks."}
            </p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {"Big believer in open-source software."}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/works"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                {"Works"}
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                {"Follow on GitHub"}
              </Link>
              {/* <Link
                href={siteConfig.links.twitter}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                {"Follow on X"}
              </Link> */}
            </div>
          </div>
        </Button>
      </div>
    </section>
  );
}
