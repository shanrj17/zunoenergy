import { Check, Shield, Zap, Heart, ArrowRight, User, Home, Lightbulb, Lock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* SECTION 1: HERO */}
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-green-50/50 via-white to-white">
                <div className="mx-auto max-w-[1320px] px-6 pt-[72px] pb-[88px] lg:px-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            About ZunoEnergy
                        </span>
                    </div>
                    <h1 className="mx-auto max-w-[900px] text-4xl font-bold text-gray-900 sm:text-[52px] leading-[1.15]">
                        Helping Americans Understand Their <br className="hidden sm:block" />
                        <span className="text-green-700">Home’s Energy — Honestly</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.6] text-gray-600">
                        ZunoEnergy was built to give U.S. homeowners clear, practical insight into their energy use — without pressure, sales calls, or gimmicks.
                    </p>
                </div>
            </div>

            {/* SECTION 2: WHY ZUNOENERGY EXISTS */}
            <section className="py-20 px-6 lg:px-8 max-w-[720px] mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                <p>
                    <span className="font-bold text-gray-900">Energy is confusing.</span> Most homeowners know they’re overpaying, but don’t know where to start. When they look for answers, they usually find two things: complex government spreadsheets or aggressive sales pitches for solar panels and new windows.
                </p>
                <p>
                    I built ZunoEnergy because I believe you shouldn't have to talk to a salesperson just to understand your own home. You deserve a tool that treats you like a smart homeowner, not a "lead" to be sold.
                </p>
                <p>
                    This platform is designed to be the starting point I wish I had: calm, data-backed, and completely private.
                </p>
            </section>

            {/* SECTION 3: BUILT BY ONE PERSON */}
            <section className="py-24 bg-gray-50/50 border-y border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Built by an Independent Creator</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                ZunoEnergy isn't a massive corporation or a utility company in disguise. It is built and maintained by one person who cares deeply about home efficiency and transparency.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Being independent means I don't answer to shareholders demanding growth at all costs. I answer to you — the homeowner trying to lower your bill.
                            </p>
                            <div className="flex items-center gap-4 text-sm font-medium text-gray-900 pt-4">
                                <span className="flex items-center gap-2"><Check className="text-green-600 h-4 w-4" /> No Investors</span>
                                <span className="flex items-center gap-2"><Check className="text-green-600 h-4 w-4" /> No Sales Quotas</span>
                                <span className="flex items-center gap-2"><Check className="text-green-600 h-4 w-4" /> 100% Bootstrapped</span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-200/20 rounded-3xl transform rotate-3 scale-105" />
                            <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <User className="h-6 w-6 text-green-700" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Independent Founder</div>
                                        <div className="text-sm text-gray-500">Creator of ZunoEnergy</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "I promise to always value your trust over a quick sale. If this tool helps you save even $10, it's a win."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CORE PRINCIPLES (TRUST BLOCK) */}
            <section className="py-24 max-w-[1240px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Our Core Principles</h2>
                    <p className="mt-4 text-gray-600">The rules that guide every feature we build.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Shield, title: "No Sales Pressure", desc: "We never push you to buy things you don't need." },
                        { icon: Lock, title: "Private by Default", desc: "Your usage data stays yours. We don't sell it." },
                        { icon: Heart, title: "Honest Math", desc: "We use conservative estimates, not best-case scenarios." },
                        { icon: Lightbulb, title: "Education First", desc: "We explain 'why', so you can make your own choices." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                            <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                                <item.icon className="h-5 w-5 text-green-700" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: HOW ZUNOENERGY HELPS */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                        <p className="text-gray-300 text-lg mb-12">
                            A simple, transparent process to give you clarity in minutes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
                        {[
                            { step: "01", title: "You Share Basics", desc: "Tell us your zip code, home age, and approximate size. No sensitive info needed." },
                            { step: "02", title: "We Crunch Numbers", desc: "We compare your profile against million-row datasets from the DOE and local climate norms." },
                            { step: "03", title: "You Get Insights", desc: "See exactly where money is leaking and get a prioritized list of fixes." }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-4xl font-black text-green-500/20 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: AI EXPLANATION PHILOSOPHY */}
            <section className="py-24 max-w-[900px] mx-auto px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                    <Zap className="h-4 w-4" /> AI for Good
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Use Artificial Intelligence</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    We use AI not to replace experts, but to explain complex topics simply. Our AI models are strictly instructed to follow a <span className="font-semibold text-gray-900">"Cause → Effect → Outcome"</span> reasoning pattern. This ensures every piece of advice is logical, traceable, and grounded in building science—not hallucinated promises.
                </p>
            </section>

            {/* SECTION 7: WHO THIS IS FOR */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-12">This Tool Is For You If...</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                        {[
                            "You want to lower your bills but don't want to talk to a salesman.",
                            "You own a home built before 2010 and suspect it's inefficient.",
                            "You prefer data and math over marketing slogans."
                        ].map((text, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                                <div className="mt-1 bg-green-100 rounded-full p-1 h-fit w-fit shrink-0">
                                    <Check className="h-3 w-3 text-green-700" />
                                </div>
                                <span className="text-gray-700 font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: VISION FOR THE FUTURE */}
            <section className="py-32 bg-green-900 text-center px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-800 to-green-900" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
                        "To become the place Americans go first to understand their home’s energy — before calling anyone."
                    </h2>
                    <p className="text-green-100 text-lg opacity-90">
                        — The ZunoEnergy Vision
                    </p>
                </div>
            </section>

            {/* SECTION 9: FOUNDER SIGNATURE BLOCK */}
            <section className="py-24 max-w-[720px] mx-auto px-6 lg:px-8">
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 text-center sm:text-left flex flex-col sm:flex-row items-center gap-8">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm font-bold text-2xl text-green-700">
                        Z
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-600 italic text-lg mb-6 font-serif relative">
                            <span className="text-4xl text-green-200 absolute -top-4 -left-2">"</span>
                            Thank you for trusting ZunoEnergy with your home’s data. I hope it helps you make your home more comfortable and affordable.
                        </p>
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                            <div>
                                <div className="font-bold text-gray-900 text-lg">The Independent Founder</div>
                                <div className="text-green-600 uppercase tracking-wider text-xs font-bold mt-1">Creator of ZunoEnergy</div>
                            </div>
                            {/* SVG Signature */}
                            <svg className="h-12 w-32 text-gray-400 opacity-60 ml-4" viewBox="0 0 200 60" fill="none" stroke="currentColor">
                                <path d="M10,40 Q50,10 80,40 T150,40" strokeWidth="2" strokeLinecap="round" />
                                <path d="M10,40 Q50,70 80,40" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
