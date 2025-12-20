import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts } from "@/lib/markdown"
import { ArrowLeft } from "lucide-react"

import { i18n } from "@/i18n-config"

// Define valid categories to prevent 404s or arbitrary rendering
const VALID_CATEGORIES = {
    "energy-tips": "Energy Tips",
    "state-energy-guides": "State Energy Guides",
}

// generateStaticParams removed to resolve build memory/worker crash


export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params
    const title = VALID_CATEGORIES[category as keyof typeof VALID_CATEGORIES]
    if (!title) return { title: "Category Not Found" }
    return {
        title: `${title} | Learn | ZunoEnergy`,
    }
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params
    const categoryTitle = VALID_CATEGORIES[params.category as keyof typeof VALID_CATEGORIES]

    if (!categoryTitle) {
        notFound()
    }

    const posts = getAllPosts(params.category, ["title", "date", "slug", "description"])

    return (
        <div className="bg-white min-h-screen py-12 px-6 lg:px-8">
            <div className="max-w-[800px] mx-auto">
                <div className="mb-8">
                    <Link href="/learn" className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors mb-6">
                        <ArrowLeft className="h-4 w-4" /> Back to Learn
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{categoryTitle}</h1>
                </div>

                <div className="grid gap-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link key={post.slug} href={`/learn/${params.category}/${post.slug}`} className="group block">
                                <article className="bg-white border-b border-gray-100 pb-8 hover:bg-gray-50/50 transition-colors p-4 -mx-4 rounded-xl">
                                    <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <div className="mt-4 text-green-700 font-medium text-sm group-hover:underline">
                                        Read Article
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No articles found in this category yet.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
