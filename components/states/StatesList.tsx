"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin, Zap, Search } from "lucide-react"
import { STATES_LIST } from "@/lib/states-data"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

const POPULAR_STATES = [
    { name: "Texas", slug: "texas" },
    { name: "California", slug: "california" },
    { name: "New York", slug: "new-york" },
    { name: "Florida", slug: "florida" },
    { name: "Illinois", slug: "illinois" },
]

export default function StatesList() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="bg-white">
            {/* SECTION 1: HERO */}
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-green-50/50 via-white to-white">
                <div className="mx-auto max-w-[1320px] px-6 pt-[72px] pb-[88px] lg:px-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5" /> Nationwide Coverage
                        </span>
                    </div>
                    <h1 className="mx-auto max-w-[900px] text-4xl font-bold text-gray-900 sm:text-[52px] leading-[1.15]">
                        Energy Savings & Insights <br className="hidden sm:block" />
                        <span className="text-green-700">By State</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.6] text-gray-600 mb-12">
                        Energy costs and savings opportunities vary widely across the U.S. Select your state to explore local energy costs, incentives, and practical insights for homeowners.
                    </p>

                    {/* SECTION 1.5: SEARCH & SHORTCUTS */}
                    <div className="max-w-md mx-auto text-left">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <Input
                                type="text"
                                placeholder="Start typing your state name..."
                                className="pl-10 h-12 text-lg bg-white shadow-sm border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Find your state"
                            />
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <span className="text-gray-500 font-medium">Popular states:</span>
                            {POPULAR_STATES.map((state) => (
                                <Link
                                    key={state.slug}
                                    href={`/states/${state.slug}`}
                                    className="text-gray-600 hover:text-green-700 hover:underline transition-colors"
                                >
                                    {state.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: STATES DIRECTORY */}
            <section className="py-20 px-6 lg:px-8 max-w-[1320px] mx-auto min-h-[400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STATES_LIST.map((state) => {
                        const isMatch = state.name.toLowerCase().includes(searchQuery.toLowerCase())
                        return (
                            <Link
                                key={state.slug}
                                href={`/states/${state.slug}`}
                                className={`group bg-white border border-gray-100 rounded-xl p-6 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all text-left ${isMatch ? "block" : "hidden"}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-700 transition-colors">
                                            {state.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                            {state.desc}
                                        </p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        )
                    })}

                    {/* No Results Message */}
                    <div className={`col-span-full text-center py-12 ${STATES_LIST.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())) ? "hidden" : "block"}`}>
                        <p className="text-gray-500 text-lg">No matching states found.</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-green-600 font-medium hover:underline mt-2"
                        >
                            Clear search
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 3: EDUCATIONAL CONTEXT */}
            <section className="py-24 bg-gray-50/50 border-y border-gray-100">
                <div className="max-w-[720px] mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="h-10 w-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                            <Zap className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why energy costs vary by state</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Your electricity bill is shaped by more than just how much you use. Local climate patterns, utility market regulations (regulated vs. deregulated), the age of typical housing stock, and regional power sources all play a massive role. That's why a "good" bill in California looks very different from one in Ohio.
                    </p>
                </div>
            </section>

            {/* SECTION 4: SOFT EXIT CTA */}
            <section className="py-24 bg-white text-center px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Want to understand how these factors affect your own home?
                </h2>
                <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 px-8 h-12 text-base">
                    <Link href="/calculator">Start My Energy Checkup</Link>
                </Button>
            </section>
        </div>
    )
}
