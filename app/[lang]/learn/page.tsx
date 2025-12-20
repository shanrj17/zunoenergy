import Link from "next/link"
import { BookOpen, Map, Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export const metadata = {
    title: "Learn | ZunoEnergy",
    description: "Clear, practical explanations to help U.S. homeowners understand energy costs, efficiency, and savings."
}

export default function LearnIndexPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* HERO */}
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50/50 via-white to-white">
                <div className="mx-auto max-w-[1200px] px-6 pt-[72px] pb-[88px] text-center">
                    <h1 className="mx-auto max-w-[800px] text-4xl font-bold text-gray-900 sm:text-[52px] leading-[1.15]">
                        Learn About Home Energy <br />
                        <span className="text-blue-700">Simply & Honestly</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-[700px] text-[18px] leading-[1.6] text-gray-600">
                        Clear, practical explanations to help U.S. homeowners understand energy costs, efficiency, and savings — without sales pressure.
                    </p>
                </div>
            </div>

            {/* SECTIONS */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Energy Tips */}
                    <Link href="/learn/energy-tips" className="group block h-full">
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all h-full flex flex-col">
                            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="h-6 w-6 text-blue-700" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Energy Tips</h2>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                DIY guides, seasonal strategies, and quick wins to lower your bills without sacrificing comfort.
                            </p>
                            <div className="flex items-center text-blue-700 font-medium group-hover:underline">
                                Browse Tips <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>

                    {/* State Guides */}
                    <Link href="/learn/state-energy-guides" className="group block h-full">
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all h-full flex flex-col">
                            <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Map className="h-6 w-6 text-green-700" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">State Energy Guides</h2>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                Deep dives into local markets, deregulation, and specific climate challenges for your state.
                            </p>
                            <div className="flex items-center text-green-700 font-medium group-hover:underline">
                                Select State <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>

                    {/* Smart Home (Coming Soon) */}
                    <Link href="/learn/smart-home-basics" className="group block h-full">
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all h-full flex flex-col opacity-75">
                            <div className="h-12 w-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Home className="h-6 w-6 text-purple-700" />
                            </div>
                            <div className="flex justify-between items-start">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">Smart Home</h2>
                                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Soon</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                Simple ways to automate your savings with thermostats, plugs, and monitoring devices.
                            </p>
                            <div className="flex items-center text-purple-700 font-medium group-hover:underline">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
