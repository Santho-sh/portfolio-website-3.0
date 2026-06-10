import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/santho-sh",
    href: personalInfo.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/santho-sh",
    href: personalInfo.github,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to full-time roles, freelance projects, and collaborations in web development and AI."
          align="center"
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <Card className="h-full border-border/60 bg-card/80 transition-colors hover:border-primary/30">
                <CardContent className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate font-medium">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            );

            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </Link>
              );
            }

            return <div key={item.label}>{content}</div>;
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild>
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail />
              Send an email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
