import { Check, ArrowRight } from "lucide-react"

export function FeaturesList() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Extended Glow effects */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 leading-tight">
                            Unlock a Complete <span className="text-green-400">Energy Profile</span> of Your Home
                        </h2>
                        <p className="text-lg text-slate-300 mb-12 max-w-lg leading-relaxed">
                            See exactly where your money goes and how to keep more of it. No generic advice — just data-backed action items.
                        </p>

                        <ul className="space-y-8">
                            {[
                                { title: "Estimated Annual Savings", desc: "See potential dollar amounts based on local rates." },
                                { title: "Home Energy Health Score", desc: "A simple grade (A-F) to benchmark your efficiency." },
                                { title: "CO₂ Reduction Impact", desc: "Understand your environmental contribution in real terms." },
                                { title: "Top 3 Priority Actions", desc: "High-impact fixes ranked by ROI and ease of install." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-5 group">
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                                            <Check className="h-4 w-4 text-green-400" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div className="border-b border-slate-800 pb-8 w-full group-last:border-0 group-last:pb-0">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700 shadow-2xl overflow-hidden backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500 p-2">
                            <div className="bg-slate-900 rounded-xl overflow-hidden relative aspect-[4/3] flex flex-col">
                                {/* Mock UI Header */}
                                <div className="h-12 border-b border-slate-800 flex items-center px-6 gap-2 bg-slate-800/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                </div>
                                {/* Mock UI Content */}
                                <div className="p-8 flex-1 flex flex-col justify-center items-center text-center space-y-6">
                                    <div className="w-24 h-24 rounded-full border-4 border-green-500/20 flex items-center justify-center relative">
                                        <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <span className="text-3xl font-bold text-white">B+</span>
                                        </div>
                                        <div className="absolute -bottom-2 bg-slate-800 px-2 py-0.5 rounded text-[10px] items-center border border-slate-700 text-slate-400">SCORE</div>
                                    </div>
                                    <div className="space-y-2 w-full max-w-xs mx-auto">
                                        <div className="h-2 bg-slate-700/50 rounded-full w-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[75%]" />
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-500 font-medium">
                                            <span>Efficiency</span>
                                            <span>Good</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-slate-800/50">
                                        <div className="p-3 rounded bg-slate-800 text-center">
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Savings</div>
                                            <div className="text-lg font-bold text-green-400">$340/yr</div>
                                        </div>
                                        <div className="p-3 rounded bg-slate-800 text-center">
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Rating</div>
                                            <div className="text-lg font-bold text-blue-400">Top 20%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
