import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const STATES = [
    { name: "Texas", slug: "texas", desc: "High cooling needs & deregulated market choices." },
    { name: "California", slug: "california", desc: "High rates & aggressive solar incentives." },
    { name: "New York", slug: "new-york", desc: "Older homes & significant heating costs." },
    { name: "Florida", slug: "florida", desc: "Humidity control & year-round cooling." },
    { name: "Illinois", slug: "illinois", desc: "Extreme seasonal shifts & heating efficiency." },
]

export function StateSavings() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                        Location Matters
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Energy Costs Vary by State — <br className="hidden sm:block" />
                        <span className="text-green-700">Your Savings Should Too</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Energy use in Texas looks very different from California or New York. That’s why ZunoEnergy tailors insights based on where you live.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STATES.map((state) => (
                        <Link
                            key={state.slug}
                            href={`/states/${state.slug}`}
                            className="group block p-8 bg-white rounded-2xl hover:bg-green-50/30 transition-all duration-300 border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg hover:-translate-y-1 relative"
                        >
                            <div className="absolute top-8 right-8 text-gray-200 group-hover:text-green-200 transition-colors">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">{state.name}</h3>
                            <p className="text-base text-gray-600 group-hover:text-gray-700 leading-relaxed max-w-[85%]">{state.desc}</p>
                        </Link>
                    ))}
                    <Link
                        href="/states"
                        className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 text-center hover:shadow-lg hover:-translate-y-1 group transition-all"
                    >
                        <span className="text-green-800 font-bold text-lg mb-2">Don&apos;t see your state?</span>
                        <span className="flex items-center text-green-600 font-medium">
                            Check full list <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
