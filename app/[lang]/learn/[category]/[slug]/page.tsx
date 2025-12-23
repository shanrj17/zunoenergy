import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, markdownToHtml, getHeadings } from "@/lib/markdown"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default async function ArticlePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category, slug } = await params
    try {
        const post = getPostBySlug(category, slug, ["title", "description", "date", "slug", "content", "image"])
        const contentHtml = await markdownToHtml(post.content || "")
        const headings = await getHeadings(post.content || "")

        return (
            <div className="bg-white min-h-screen">
                {/* 1. Hero Section */}
                <header className="bg-slate-50 border-b border-slate-100 pt-16 pb-12 lg:pt-24 lg:pb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50/50 to-transparent pointer-events-none" />

                    <div className="max-w-[720px] mx-auto px-6 relative z-10 text-center">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {category.replace(/-/g, " ")}
                            </span>
                            <span className="text-gray-400 text-xs font-medium px-1">•</span>
                            <time className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                            <span className="text-gray-400 text-xs font-medium px-1">•</span>
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                5 min read
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            {post.title}
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
                            {post.description}
                        </p>

                        {post.image && (
                            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 bg-white">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                    </div>
                </header>

                <div className="max-w-[1100px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
                    <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 items-start">

                        {/* 2. Main Content Column */}
                        <main className="min-w-0">
                            <div
                                className="prose prose-lg prose-slate max-w-none 
                                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:scroll-mt-24
                                prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-16 prose-h2:mb-6 prose-h2:relative
                                prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:mb-8
                                prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:mb-8
                                prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-green-800
                                prose-li:text-slate-700 prose-li:leading-[1.8]
                                prose-blockquote:border-l-green-500 prose-blockquote:bg-green-50/30 prose-blockquote:not-italic prose-blockquote:py-2
                                prose-img:rounded-xl prose-img:shadow-md prose-img:my-10"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </main>

                        {/* 3. Sticky Sidebar (Table of Contents) */}
                        <aside className="hidden lg:block sticky top-24 pl-6 border-l border-slate-100">
                            <div className="space-y-6">
                                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest text-[11px]">
                                    On this page
                                </div>
                                <nav>
                                    <ul className="space-y-3 text-sm">
                                        {headings.map((heading) => (
                                            <li key={heading.slug}>
                                                <a
                                                    href={`#${heading.slug}`}
                                                    className="text-slate-500 hover:text-green-600 block leading-tight transition-colors"
                                                >
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Sidebar CTA */}
                                <div className="bg-blue-50 p-5 rounded-xl mt-8">
                                    <h4 className="font-bold text-blue-900 text-sm mb-2">Lower Your Bill</h4>
                                    <p className="text-xs text-blue-700 mb-4 leading-relaxed">
                                        Find your home's hidden energy waste in 2 minutes.
                                    </p>
                                    <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-sm">
                                        <Link href="/smart-energy-checkup">
                                            Start Checkup
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* 4. Footer CTA (Mobile/Bottom) */}
                <div className="bg-slate-900 py-20 text-center px-6">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full backdrop-blur-sm mb-8 ring-1 ring-white/20">
                            <ArrowLeft className="h-6 w-6 text-green-400 rotate-180" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">See how this applies to your home.</h2>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg mx-auto">
                            Stop guessing. Get a personalized breakdown of your energy usage and savings potential in about 2 minutes.
                        </p>
                        <Button asChild size="lg" className="rounded-full bg-green-500 hover:bg-green-400 text-slate-900 font-bold px-10 h-14 text-lg shadow-xl shadow-green-500/20 transition-all hover:scale-105">
                            <Link href="/smart-energy-checkup">
                                Start Free Analysis
                            </Link>
                        </Button>
                        <p className="mt-6 text-sm text-slate-500">No account required • 100% Free</p>
                    </div>
                </div>
            </div>
        )
    } catch (e) {
        console.error(e)
        notFound()
    }
}
