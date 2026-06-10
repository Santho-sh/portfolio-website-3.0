import { personalInfo, summary } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Crafting software at the intersection of web and AI"
          description="Passionate about building products that are fast, scalable, and intelligent."
        />

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <Card className="border-border/60 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                {summary}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-border/60 bg-card/50">
              <CardContent className="space-y-3 pt-6">
                <h3 className="font-medium">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <Badge key={lang} variant="secondary">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/50">
              <CardContent className="space-y-3 pt-6">
                <h3 className="font-medium">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
