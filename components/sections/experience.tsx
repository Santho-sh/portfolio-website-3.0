import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Building impactful software across AI integration and full-stack development."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <Card
              key={job.company}
              className="relative overflow-hidden border-border/60 bg-card/50"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{job.role}</CardTitle>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {job.company} · {job.location}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit shrink-0">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
