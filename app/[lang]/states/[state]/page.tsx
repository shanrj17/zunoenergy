import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Leaf, Shield, Zap, TrendingUp, Home, DollarSign } from "lucide-react"
import { getStateBySlug, getStateIncentives, STATES_LIST } from "@/lib/states-data"
import { Button } from "@/components/ui/Button"
import { CITIES_LIST } from "@/lib/cities-data"

// Mock monthly usage for estimation (900 kWh is roughly US avg)
const AVG_MONTHLY_KWH = 900

// generateStaticParams removed to resolve build memory/worker crash


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
    const { state } = await params
    const stateData = getStateBySlug(state)
    if (!stateData) return { title: "State Not Found" }
    return {
        title: `${stateData.name} Energy Guide | Costs & Incentives`,
        description: `Compare energy rates, find incentives, and estimate savings for homes in ${stateData.name}.`,
    }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
    const { state } = await params
    const stateData = getStateBySlug(state)

    if (!stateData) {
        notFound()
    }

    const avgBill = (AVG_MONTHLY_KWH * stateData.profile.rate).toFixed(0)
    const incentives = getStateIncentives(stateData.region || "MidWest")

    return (
        <div className="bg-white">
            {/* SECTION 1: HERO */}
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-green-50/50 via-white to-white">
                <div className="mx-auto max-w-[1320px] px-6 pt-[72px] pb-[88px] lg:px-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <Link href="/states" className="text-sm font-medium text-gray-500 hover:text-green-700 transition-colors">
                            States
                        </Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="text-sm font-medium text-gray-900">{stateData.name}</span>
                    </div>
                    <h1 className="mx-auto max-w-[900px] text-4xl font-bold text-gray-900 sm:text-[52px] leading-[1.15]">
                        {stateData.name} Home Energy <br className="hidden sm:block" />
                        <span className="text-green-700">Costs & Savings Guide</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.6] text-gray-600">
                        Local energy costs, incentives, and savings insights for homeowners in {stateData.name}.
                    </p>
                </div>
            </div>

            {/* SECTION 2: STATE SNAPSHOT */}
            <section className="py-12 px-6 lg:px-8 max-w-[1320px] mx-auto -mt-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                            <DollarSign className="h-6 w-6 text-green-700" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">${avgBill}</div>
                        <div className="text-sm text-gray-500 font-medium">Avg. Monthly Bill</div>
                        <p className="text-xs text-gray-400 mt-2">Based on {AVG_MONTHLY_KWH} kWh/mo est.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="h-6 w-6 text-blue-700" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                            {stateData.profile.rate.toFixed(2)}¢
                        </div>
                        <div className="text-sm text-gray-500 font-medium">Avg. Electricity Rate</div>
                        <p className="text-xs text-gray-400 mt-2">Per kWh (residential)</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                            <Leaf className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                            {stateData.profile.co2PerKwh > 0.4 ? "High" : "Moderate"}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">Grid Intensity</div>
                        <p className="text-xs text-gray-400 mt-2">Carbon impact per kWh</p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHY COSTS ARE DIFFERENT */}
            <section className="py-24 px-6 lg:px-8 max-w-[900px] mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why energy costs are different in {stateData.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Energy bills in {stateData.name} are driven by specific factors like {stateData.desc.toLowerCase()}.
                    Additionally, the local climate plays a huge role—hotter summers drive up cooling demand, while regional grid fuel sources impact the rate per kWh.
                    {stateData.region === "South" || stateData.region === "SouthWest"
                        ? " In this region, air conditioning is often the largest single power consumer."
                        : " In this climate, heating during winter months can significantly spike usage."}
                </p>
            </section>

            {/* SECTION 4: INCENTIVES */}
            <section className="py-20 bg-green-50/50">
                <div className="max-w-[720px] mx-auto px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Energy Incentives</h2>
                    <ul className="space-y-4">
                        {incentives.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-green-100/50 shadow-sm">
                                <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <div className="h-2 w-2 rounded-full bg-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* SECTION: TOP CITIES */}
            <section className="py-12 px-6 lg:px-8 max-w-[900px] mx-auto border-b border-gray-100 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Compare Electric Rates in {stateData.name} Cities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {stateData.slug in CITIES_LIST ? (
                        CITIES_LIST[stateData.slug].map((city) => (
                            <Link
                                key={city.slug}
                                href={`/states/${stateData.slug}/${city.slug}`}
                                className="text-sm text-gray-600 hover:text-green-700 hover:underline decoration-green-500/30"
                            >
                                {city.name}
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-full text-sm text-gray-400 italic">City data coming soon for {stateData.name}...</p>
                    )}
                </div>
            </section>

            {/* SECTION 5: SAVING OPPORTUNITIES */}
            <section className="py-24 px-6 lg:px-8 max-w-[900px] mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Where {stateData.name} homeowners save</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Home className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Insulation & Sealing</h3>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                Preventing air leaks is often the most cost-effective upgrade, especially in older homes common in the region.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Zap className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">HVAC Efficiency</h3>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                Upgrading to a modern heat pump or high-SEER AC unit can lower heating and cooling costs by 20-40%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: CALCULATOR TRANSITION */}
            <section className="py-24 bg-gray-900 text-center px-6 text-white relative overflow-hidden isolate">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.800),theme(colors.gray.900))] opacity-50" />
                <div className="max-w-[720px] mx-auto">
                    <h2 className="text-3xl font-bold mb-6">
                        Your home’s energy savings depend on more than just your state.
                    </h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-[600px] mx-auto">
                        Home size, age, and usage habits matter. Get a personalized breakdown in 2 minutes.
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-green-500 hover:bg-green-400 text-gray-900 font-bold px-8 h-12 text-base shadow-lg shadow-green-500/20 border-0">
                        <Link href={`/calculator?state=${stateData.slug}`}>
                            Check Your {stateData.name} Energy Savings
                        </Link>
                    </Button>
                </div>
            </section>

            {/* SECTION 7: TRUST FOOTNOTE */}
            <div className="bg-gray-50 py-12 px-6 text-center border-t border-gray-100">
                <p className="text-xs text-gray-400 max-w-[600px] mx-auto">
                    Estimates are based on U.S. DOE averages and regional climate data. Actual usage and savings may vary based on your specific utility provider and home characteristics.
                </p>
            </div>
        </div>
    )
}


