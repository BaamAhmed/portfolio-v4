import Link from "next/link"
import { Terminal, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <header className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4">
          <Terminal className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">Blog</h1>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Thoughts, learnings, and insights about software development and technology.
        </p>
      </header>

      <main className="container mx-auto px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="group cursor-pointer transition-colors hover:bg-accent">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span className="rounded-md border bg-muted px-2 py-1 text-xs">{post.category}</span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2 text-lg">
                    {post.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-md border bg-muted px-2 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

const blogPosts = [
  {
    slug: "building-scalable-applications-with-microservices",
    title: "Building Scalable Applications with Microservices",
    date: "January 20, 2024",
    category: "Architecture",
    excerpt: "An in-depth look at how to design and implement microservices architecture for modern applications.",
    tags: ["Microservices", "Architecture", "Scalability"],
  },
  {
    slug: "the-future-of-frontend-development-with-react-server-components",
    title: "The Future of Frontend Development with React Server Components",
    date: "January 15, 2024",
    category: "Frontend",
    excerpt: "Exploring the benefits and implementation details of React Server Components.",
    tags: ["React", "Performance", "Server Components"],
  },
  {
    slug: "optimizing-database-performance-in-high-load-applications",
    title: "Optimizing Database Performance in High-Load Applications",
    date: "January 10, 2024",
    category: "Backend",
    excerpt: "Tips and techniques for improving database performance in applications with high traffic.",
    tags: ["Database", "Performance", "SQL"],
  },
  {
    slug: "implementing-authentication-with-next-js-and-jwt",
    title: "Implementing Authentication with Next.js and JWT",
    date: "January 5, 2024",
    category: "Security",
    excerpt: "A comprehensive guide to implementing secure authentication in Next.js applications.",
    tags: ["Next.js", "Authentication", "Security"],
  },
]

