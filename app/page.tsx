import { Terminal, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Page() {
  return (
    <div className="min-h-screen bg-background/30 font-mono">
      <InteractiveBackground />
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-24">
        <div className="flex items-center gap-4">
          <Terminal className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">Bassam Ahmed</h1>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Software engineer specializing in building exceptional digital
          experiences. Currently focused on building accessible, human-centered
          products.
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="outline" size="sm">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" size="sm">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto grid gap-8 px-4 pb-24 md:grid-cols-[2fr_1fr]">
        {/* Featured Work */}
        <section className="space-y-6 rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">
            Featured Work
          </h2>
          <div className="space-y-4">
            <div className="group rounded-md border bg-card p-4 transition-colors hover:bg-accent">
              <h3 className="font-medium">Project Alpha</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A revolutionary app that transforms how we interact with
                technology. Built with React, Node.js, and GraphQL.
              </p>
            </div>
            <div className="group rounded-md border bg-card p-4 transition-colors hover:bg-accent">
              <h3 className="font-medium">Project Beta</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                An innovative platform that connects people in meaningful ways.
                Powered by Next.js and PostgreSQL.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column */}
        <div className="space-y-8">
          {/* About */}
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              I build accessible, inclusive products and digital experiences for
              the web. With 5+ years of experience in frontend development, I
              enjoy turning complex problems into simple, beautiful solutions.
            </p>
          </section>

          {/* Skills */}
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "GraphQL",
                "PostgreSQL",
                "Tailwind",
                "AWS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-muted px-2 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
