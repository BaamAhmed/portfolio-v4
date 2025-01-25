import { notFound } from "next/navigation";
import { Terminal, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background font-mono">
      <header className="container mx-auto px-4 py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <Terminal className="h-6 w-6" />
          <h1 className="text-2xl font-bold tracking-tight">{post.title}</h1>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{post.date}</span>
          <span className="rounded-md border bg-muted px-2 py-1 text-xs">
            {post.category}
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-24">
        <article className="prose prose-invert max-w-2xl dark:prose-invert">
          {post.content}
        </article>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border bg-muted px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

const blogPosts = [
  {
    slug: "building-scalable-applications-with-microservices",
    title: "Building Scalable Applications with Microservices",
    date: "January 20, 2024",
    category: "Architecture",
    excerpt:
      "An in-depth look at how to design and implement microservices architecture for modern applications.",
    tags: ["Microservices", "Architecture", "Scalability"],
    content: (
      <>
        <p>
          Microservices architecture has become increasingly popular in recent
          years as a way to build scalable and maintainable applications. In
          this article, we'll explore the key principles of microservices and
          how to implement them effectively.
        </p>
        <h2>What are Microservices?</h2>
        <p>
          Microservices are an architectural style that structures an
          application as a collection of small, loosely coupled services. Each
          service is responsible for a specific piece of functionality and can
          be developed, deployed, and scaled independently.
        </p>
        <h2>Key Benefits of Microservices</h2>
        <ul>
          <li>
            Scalability: Services can be scaled independently based on demand.
          </li>
          <li>
            Flexibility: Different technologies can be used for different
            services.
          </li>
          <li>
            Resilience: Failure in one service doesn't bring down the entire
            application.
          </li>
          <li>
            Ease of deployment: Services can be updated and deployed
            independently.
          </li>
        </ul>
        <h2>Implementing Microservices</h2>
        <p>
          When implementing a microservices architecture, consider the
          following:
        </p>
        <ol>
          <li>
            Service boundaries: Clearly define the responsibilities of each
            service.
          </li>
          <li>
            Inter-service communication: Choose appropriate protocols (e.g.,
            REST, gRPC).
          </li>
          <li>
            Data management: Decide on data storage and consistency strategies.
          </li>
          <li>
            Monitoring and logging: Implement robust observability solutions.
          </li>
        </ol>
        <p>
          By carefully considering these aspects, you can build scalable
          applications that can grow and adapt to changing requirements over
          time.
        </p>
      </>
    ),
  },
  // ... (other blog posts with similar structure)
];
