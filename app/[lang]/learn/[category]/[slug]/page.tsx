import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, markdownToHtml } from "@/lib/markdown"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/Button"

import { getAllPosts } from "@/lib/markdown"

const VALID_CATEGORIES = [
    "energy-tips",
    "state-energy-guides",
]

// generateStaticParams removed to resolve build memory/worker crash
// falling back to dynamic SSR for this route


export async function generateMetadata({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category, slug } = await params
    try {
        const post = getPostBySlug(category, slug, ["title", "description"])
        return {
            title: `${post.title} | ZunoEnergy`,
            description: post.description,
        }
    } catch (e) {
        return { title: "Article Not Found" }
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category, slug } = await params
    try {
        const post = getPostBySlug(category, slug, ["title", "date", "slug", "content"])
        const contentHtml = await markdownToHtml(post.content || "")

        return (
            <div className="bg-white min-h-screen">
                <article className="max-w-[720px] mx-auto px-6 py-12 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <Link
                            href={`/learn/${category}`}
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to {category.replace(/-/g, " ")}
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-[44px] leading-tight mb-4">
                            {post.title}
                        </h1>
                        <time className="text-gray-400 text-sm">{post.date}</time>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-gray max-w-none hover:prose-a:text-green-600 prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </article>

                {/* Footer CTA */}
                <div className="max-w-[720px] mx-auto px-6 pb-20 mt-12 border-t border-gray-100 pt-12 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Want to see how this applies to your home?</h3>
                    <p className="text-gray-600 mb-8 max-w-[500px] mx-auto">
                        Get a personalized energy analysis in 2 minutes with our free Smart Energy Checkup.
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 shadow-lg shadow-blue-500/20">
                        <Link href="/smart-energy-checkup">
                            Try the Smart Energy Checkup
                        </Link>
                    </Button>
                </div>
            </div>
        )
    } catch (e) {
        console.error(e)
        notFound()
    }
}
