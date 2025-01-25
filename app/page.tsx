import { Terminal, Mail, Github, Linkedin, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Page() {
  return (
    <div className="min-h-screen bg-background/30 font-mono">
      <InteractiveBackground />
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-24">
        <div className="flex items-center gap-4">
          <Terminal className="h-8 w-8" />
          <h1 className="text-3xl font-bold tracking-tight">Bassam Ahmed</h1>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          (Human) software engineer specializing in building exceptional digital
          experiences. Currently focused on exploring machine learning
          fundamentals and agentic AI workflows
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://aurparhobucket.s3.ap-south-1.amazonaws.com/Bassam_Ahmed_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <File className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/BaamAhmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.linkedin.com/in/baamahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
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
            <a
              href="https://www.4040.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-left rounded-md border bg-card p-4 transition-colors hover:bg-accent"
            >
              <h3 className="font-medium">
                4040 | Smarter Pricing For Sports Facilities
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A "weekends-and-evenings" project that I've co-founded with a
                friend to help sports facilities optimize their pricing
                strategies. We do everything from data collection to building
                machine learning models to predict demand and suggest optimal
                pricing strategies.
              </p>
            </a>
            <a
              href="https://www.theverge.com/2024/5/16/24158246/sony-playstation-pc-overlay-hands-on"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-left rounded-md border bg-card p-4 transition-colors hover:bg-accent"
            >
              <h3 className="font-medium">
                My Work at PlayStation Reached Millions of Users
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                (Links to a Verge article about the launch of PlayStation
                Overlay on PC)
                <br></br>At PlayStation, I worked on the UI framework for
                PC-based applications, and was ecstatic to see that my work was
                shipped to millions of users in the form of the in-game
                PlayStation overlay first introduced in Ghost of Tsushima (best
                game ever).
              </p>
            </a>
          </div>
        </section>

        {/* Right Column */}
        <div className="space-y-8">
          {/* About */}
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              I'm a 3rd year Computer Science student at the University of
              Waterloo, specializing in AI. I've previously worked at both
              high-growth startups like Stably (YC W22) and big-tech companies
              like PlayStation. I thrive in fast-paced and challenging
              environments, and pick up new tech stacks instantly.
            </p>
          </section>

          {/* Skills */}
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Python",
                "C++",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Tailwind",
                "AWS",
                "Docker",
                "Django",
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
