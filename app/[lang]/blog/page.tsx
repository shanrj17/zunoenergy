import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const posts = [
    {
        slug: "top-10-energy-saving-tips-2025",
        title: "Top 10 Energy Saving Tips for 2025",
        excerpt: "Discover the latest technologies and habits to reduce your energy bill this year.",
        date: "Dec 15, 2025",
    },
    {
        slug: "solar-panel-myths-debunked",
        title: "5 Solar Panel Myths Debunked",
        excerpt: "Separating fact from fiction when it comes to residential solar installation.",
        date: "Dec 10, 2025",
    },
    {
        slug: "smart-home-energy-management",
        title: "The Future of Smart Home Energy Management",
        excerpt: "How AI and IoT devices are revolutionizing home efficiency.",
        date: "Dec 05, 2025",
    },
]

export default function BlogPage() {
    return (
        <div className="container py-10">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Energy Insights Blog
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Stay updated with the latest news, tips, and trends in energy efficiency.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <Card className="h-full transition-colors hover:bg-muted/50">
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{post.date}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{post.excerpt}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
