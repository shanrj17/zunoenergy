import { Check, X } from "lucide-react"

export function ComparisonSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/40 via-transparent to-transparent -z-10" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Homeowners Choose ZunoEnergy
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We built a different kind of energy tool — one that puts your interests first.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* ZunoEnergy Column - Dominant */}
                    <div className="bg-white rounded-3xl p-10 border border-green-100 shadow-xl shadow-green-900/5 ring-1 ring-green-600/10 relative overflow-hidden order-1 md:order-none">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                                <span className="text-green-700 font-bold text-xl">Z</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">ZunoEnergy</h3>
                        </div>

                        <ul className="space-y-5 relative">
                            {[
                                "Personalized by state & home type",
                                "Explains the 'why' behind savings",
                                "Conservative, reachable estimates",
                                "100% private — no sales spam"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
                                        <Check className="h-3.5 w-3.5 text-green-700" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-900 font-medium text-lg leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Typical Tools Column - Receded */}
                    <div className="bg-gray-50/50 rounded-3xl p-10 border border-gray-100 shadow-sm order-2 md:order-none opacity-90">
                        <div className="flex items-center gap-4 mb-8 grayscale opacity-70">
                            <div className="h-12 w-12 bg-gray-200 rounded-xl flex items-center justify-center shrink-0">
                                <span className="text-gray-500 font-bold text-xl">?</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-500">Typical Tools</h3>
                        </div>

                        <ul className="space-y-5">
                            {[
                                "Generic national averages",
                                "Black-box calculations",
                                "Inflated 'best-case' promises",
                                "Aggressive lead selling"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-red-100 rounded-full p-1 shrink-0">
                                        <X className="h-3.5 w-3.5 text-red-500" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-500 text-lg leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
