import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Platforms and systems I've built, co-developed, and maintained."
        />

        {featured && (
          <Card className="mb-8 overflow-hidden border-primary/20 bg-card/80">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video bg-muted lg:aspect-auto lg:min-h-70">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4">Featured</Badge>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <CardHeader>
                  <CardTitle className="text-2xl">{featured.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {featured.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {featured.url && (
                  <CardFooter>
                    <Button asChild>
                      <Link
                        href={featured.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit site
                        <ExternalLink />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </div>
            </div>
          </Card>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/60 bg-card/80 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative aspect-video bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-5" />
                    </Link>
                  )}
                </div>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
