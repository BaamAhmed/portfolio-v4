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
          My professional journey in software development and engineering
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
                  <div className="flex gap-2">
                    {experience.current && (
                      <div className="rounded-md border border-green-500 text-green-500 px-2 py-1 text-sm">
                        Current
                      </div>
                    )}
                    <div className="rounded-md border bg-muted px-2 py-1 text-sm">
                      {experience.location}
                    </div>
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
    title: "Software Engineer Intern",
    company: "Stably (YC W22)",
    period: "Oct 2024 - Present",
    location: "San Francisco, CA",
    current: true,
    responsibilities: [
      "Reduced automated test runtime by 50% by implementing ability to store and reuse authentication state between tests, significantly cutting cloud infrastructure and AI costs",
      "Enhanced test reliability by optimizing multi-modal AI agents for visual and DOM-related assertion handling",
      "Optimized company's flagship no-code test editor by resolving critical bugs and implementing intuitive UI/UX patterns, streamlining the core product experience",
      "Drove product innovation by executing across multiple disciplines, including UI/UX design, full-stack development and system architecture, in a high-velocity startup environment",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PrismaDB", "tRPC"],
  },
  {
    title: "Software Development Intern",
    company: "PlayStation (Sony Interactive Entertainment)",
    period: "Jan 2024 - Apr 2024",
    location: "Waterloo, ON",
    responsibilities: [
      "Resolved image rendering issues by modifying the React Native Windows Image component to more efficiently rasterize SVG assets, improving loading times and image resolutions across all PlayStation PC games and apps",
      "Contributed to key updates of TypeScript-based UI framework used for building PlayStation PC applications, impacting user experience for millions of PlayStation players",
      "Improved testing efficiency by implementing automated integration testing via Jest for a TypeScript module",
      "Led technical presentations on UI framework improvements, driving adoption across multiple teams",
    ],
    technologies: ["React Native Windows", "WinUI", "Jest", "TypeScript"],
  },
  {
    title: "Software Engineer Intern",
    company: "Microart Services Inc.",
    period: "May 2023 - Aug 2023",
    location: "Markham, ON",
    responsibilities: [
      "Developed an end-to-end, comprehensive image-search functionality in React Native project, enabling users to take a photo of a wine label to retrieve matching wines from an internal relational database",
      "Integrated OCR capabilities using Google Cloud Vision API, achieving 90% accuracy in wine label recognition",
      "Introduced PostgreSQL full-text search with automated indexing, boosting search speed by 30%",
      "Debugged app’s interaction with physical BLE (Bluetooth Low Energy) devices to allow for sensor monitoring",
    ],
    technologies: [
      "React Native",
      "Google Cloud",
      "Firebase",
      "Supabase",
      "PostgreSQL",
    ],
  },
];
