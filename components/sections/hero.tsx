import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo, resume } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            Software Engineer & AI Enthusiast
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="max-w-xl text-xl font-medium text-muted-foreground sm:text-2xl">
              {personalInfo.title}
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              {personalInfo.location}
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build high-performance web applications and intelligent AI systems
            — from scalable Next.js platforms to custom MCP servers and LLM
            integrations.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="#projects">View my work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={resume} target="_blank" rel="noopener noreferrer">
                <FileText />
                Resume
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-4 rounded-full bg-linear-to-br from-primary/20 to-primary/5 blur-2xl" />
          <Avatar className="relative size-56 border-4 border-background shadow-2xl ring-2 ring-primary/20 sm:size-72">
            <AvatarImage src="/avatar.webp" alt={personalInfo.name} />
            <AvatarFallback className="bg-primary/10 text-3xl font-semibold text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="size-5" />
      </Link>
    </section>
  );
}
