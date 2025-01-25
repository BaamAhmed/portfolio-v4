import { Terminal, Building2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <header className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4">
          <Terminal className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">Experience</h1>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          My professional journey in software development and engineering.
        </p>
      </header>

      <main className="container mx-auto px-4 pb-24">
        <div className="space-y-8">
          {experiences.map((experience) => (
            <Card key={experience.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="font-semibold">{experience.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <div className="rounded-md border bg-muted px-2 py-1 text-sm">
                    {experience.location}
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {experience.responsibilities.map((responsibility) => (
                    <p
                      key={responsibility}
                      className="text-sm text-muted-foreground"
                    >
                      • {responsibility}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border bg-muted px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    location: "San Francisco, CA",
    responsibilities: [
      "Led the development of a microservices architecture that improved system scalability by 300%",
      "Mentored junior developers and conducted code reviews to maintain code quality",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    period: "2019 - 2021",
    location: "New York, NY",
    responsibilities: [
      "Developed and maintained multiple client-facing web applications",
      "Optimized database queries resulting in 40% faster load times",
      "Collaborated with design team to implement responsive UI/UX improvements",
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "Software Developer",
    company: "StartUp Co",
    period: "2017 - 2019",
    location: "Boston, MA",
    responsibilities: [
      "Built RESTful APIs for mobile and web applications",
      "Implemented real-time features using WebSocket technology",
      "Contributed to open-source projects and internal tools",
    ],
    technologies: ["JavaScript", "Express.js", "MongoDB", "Socket.io"],
  },
];
