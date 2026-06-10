import { certificates } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning journey"
          description="Professional certifications."
        />

        <div className="space-y-4">
          <h3 className="text-sm font-medium tracking-widest text-primary uppercase">
            Certificates
          </h3>
          <Card className="border-border/60 bg-card/50">
            <CardContent className="divide-y divide-border pt-6">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit shrink-0">
                    {cert.date}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
