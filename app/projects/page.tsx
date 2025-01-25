import { Terminal, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <header className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4">
          <Terminal className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">Projects</h1>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A collection of projects I've worked on, from web applications to open
          source contributions.
        </p>
      </header>

      <main className="container mx-auto px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="aspect-video w-full overflow-hidden rounded-md border bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-6 text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Project
                </Button>
                <Button variant="outline" size="sm">
                  View Source
                </Button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing assistant that helps improve content quality and readability.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard for monitoring business metrics and user behavior.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "D3.js", "Express", "Redis"],
  },
];
