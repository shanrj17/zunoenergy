import { Home, Activity, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HowItWorks() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Your Energy Checkup in 3 Simple Steps
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        No complex audits. No sales calls. Just the data you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16 relative mb-20">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10" />

                    {/* Step 01 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="relative mb-8">
                            <div className="h-20 w-20 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center relative z-10 group-hover:border-blue-200 group-hover:shadow-blue-600/10 group-hover:-translate-y-1 transition-all">
                                <Home className="h-8 w-8 text-blue-600" />
                            </div>
                            <span className="absolute -top-6 -right-6 text-6xl font-black text-gray-100 -z-0 select-none">01</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tell Us About Your Home</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                            Share your state, home type, and basic usage details to establish a baseline.
                        </p>
                    </div>

                    {/* Step 02 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="relative mb-8">
                            <div className="h-20 w-20 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center relative z-10 group-hover:border-green-200 group-hover:shadow-green-600/10 group-hover:-translate-y-1 transition-all">
                                <Activity className="h-8 w-8 text-green-600" />
                            </div>
                            <span className="absolute -top-6 -right-6 text-6xl font-black text-gray-100 -z-0 select-none">02</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">See Your Energy Health</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                            Get your Energy Health Score, potential savings, and carbon impact instantly.
                        </p>
                    </div>

                    {/* Step 03 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="relative mb-8">
                            <div className="h-20 w-20 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center relative z-10 group-hover:border-emerald-200 group-hover:shadow-emerald-600/10 group-hover:-translate-y-1 transition-all">
                                <CheckCircle className="h-8 w-8 text-emerald-600" />
                            </div>
                            <span className="absolute -top-6 -right-6 text-6xl font-black text-gray-100 -z-0 select-none">03</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Get Clear Next Steps</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                            Receive practical, prioritized actions explained in plain English.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/calculator"
                        className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/20 hover:bg-green-500 hover:shadow-green-600/30 transition-all active:scale-95"
                    >
                        Run My Free Checkup <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
