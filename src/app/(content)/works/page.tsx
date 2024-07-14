import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Works
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I constantly try to improve skill sets, my primary languages and
            tools are..
          </p>
        </div>

        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                My primary languages and tools,
              </CardTitle>
              <CardDescription>
                A software professional with over a decade of experience,
                creating seamless and scalable solutions
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Github
                  </span>
                </Button>
              </a>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Front-end Applications</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    JavaScript, TypeScript, React, Next, Vue, Nuxt, Quasar,
                    Alpine, Redux, Pinia, Tanstack Query and more
                  </span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid">
                <div className="font-semibold">Back-end Services</div>
                <ul className="grid">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Node, Express, Laravel, PHP, Yii, Go, and more
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Mobile Apps</div>
              <ul className="grid">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    React Native, Quasar
                  </span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Databases</div>
              <ul className="grid">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">MongoDB, MySQL</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    3rd part services integrations - Appwrite, Supabase,
                    Firebase and more
                  </span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">UI Interfaces</div>
              <ul className="grid">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Tailwind, Shadcn, Nativewind, Vuetify, Mui and more
                  </span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Infrastructures</div>
              <ul className="grid">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Docker, Kubernetes, Kafka, Google Cloud, AWS and more
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2023-11-23">July 13, 2024</time>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
