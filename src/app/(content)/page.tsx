import Link from "next/link";
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

  const specials: any = [
    {
      text: "Spend days designing and developing web and mobile applications.",
      icon: "",
    },
    { text: "Transforming ideas into modern User Experiences.", icon: "" },
    { text: "Tech enthusiast with a passion for development.", icon: "" },
    {
      text: "Fan of React, Next, Vue, Laravel, Cloud technology stacks.",
      icon: "",
    },
    { text: "Believer in OSS(open-source software).", icon: "" },
  ];

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "var(--button-background)",
            backgroundColor: "var(--button-background-gradient)",
            borderRadius: `calc(1.75rem * 0.96)`,
          }}
          className="p-8"
        >
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-400">
              {"Hi, I’m Niyaz Ahamed Jamal"}
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-md sm:leading-8">
              {"Full-stack software engineer"}
            </p>
            <ul role="list" className="space-y-8 text-gray-600">
              {specials.map((item: any) => (
                <li key={item} className="flex gap-x-3">
                  <svg
                    className="size-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/works"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-gray-700 dark:text-gray-400"
                )}
              >
                {"Works"}
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-gray-700 dark:text-gray-400"
                )}
              >
                Connect
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
        </Button>
      </div>
    </section>
  );
}
