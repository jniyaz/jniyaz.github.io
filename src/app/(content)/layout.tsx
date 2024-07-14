import { MainNav } from "@/components/main-nav";
import { contentConfig } from "@/config/content";
import { SiteFooter } from "@/components/site-footer";
import { ModeToggle } from "@/components/mode-toggle";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export default async function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={contentConfig.mainNav} />
          <nav>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
