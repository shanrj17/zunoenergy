import { notFound } from "next/navigation"
import Link from "next/link"
import { getStateBySlug } from "@/lib/states-data"
import { getCityBySlug } from "@/lib/cities-data"
import { Button } from "@/components/ui/Button"
import { Building2, Home, TrendingUp, Zap } from "lucide-react"

// Mock data logic for city specific variances
// In a real app, this would come from a database API
function getCityData(stateData: any, cityData: any) {
    // Variance multiplier to make cities look slightly different from state avg
    const variance = (cityData.name.length % 5) / 100 // 0% to 5% variance
    const rate = stateData.profile.rate * (1 + variance)
    const bill = 900 * rate // 900 kWh assume
    return {
        rate: rate.toFixed(2),
        bill: bill.toFixed(0),
        savings: (bill * 0.2).toFixed(0) // 20% potential savings
    }
}

export async function generateMetadata({ params }: { params: Promise<{ state: string, city: string }> }) {
    const { state, city } = await params
    const stateData = getStateBySlug(state)
    const cityData = getCityBySlug(state, city)

    if (!stateData || !cityData) return { title: "City Not Found" }

    return {
        title: `Average Electric Bill in ${cityData.name}, ${stateData.code} | Calculator`,
        description: `Compare ${cityData.name} electric rates against the ${stateData.name} average. Calculate your home energy costs and find savings in ${cityData.name}.`,
    }
}

export default async function CityPage({ params }: { params: Promise<{ state: string, city: string }> }) {
    const { state, city } = await params
    const stateData = getStateBySlug(state)
    const cityData = getCityBySlug(state, city)

    if (!stateData || !cityData) {
        notFound()
    }

    const { rate, bill, savings } = getCityData(stateData, cityData)

    return (
        <div className="bg-white">
            <div className="bg-slate-900 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 flex justify-center text-sm text-slate-400">
                        <Link href={`/states/${stateData.slug}`} className="hover:text-white transition-colors">
                            {stateData.name}
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{cityData.name}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Electric Bill Calculator for <br /> <span className="text-green-400">{cityData.name}, {stateData.code}</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        See how much the average {cityData.name} homeowner pays for electricity and find local ways to lower your bill.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12 -mt-16 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-slate-100">
                    <div className="text-center">
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Avg Monthly Bill</div>
                        <div className="text-4xl font-black text-slate-900">${bill}</div>
                        <div className="text-xs text-slate-400 mt-2">Est. for 900 kWh</div>
                    </div>
                    <div className="text-center md:border-l md:border-r border-slate-100">
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Local Rate</div>
                        <div className="text-4xl font-black text-slate-900">{rate}¢</div>
                        <div className="text-xs text-slate-400 mt-2">Per kWh</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Potential Savings</div>
                        <div className="text-4xl font-black text-green-600">${savings}</div>
                        <div className="text-xs text-slate-400 mt-2">Per year w/ upgrades</div>
                    </div>
                </div>
            </div>

            <section className="max-w-3xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
                    Energy Insights for {cityData.name} Residents
                </h2>

                <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                        <div className="shrink-0">
                            <Building2 className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Local Utility Providers</h3>
                            <p className="text-slate-600">
                                In {cityData.name}, rates can vary depending on your provider.
                                {stateData.slug === 'texas' || stateData.slug === 'pennsylvania'
                                    ? " Since you are in a deregulated market, you have the power to choose your electricity supplier."
                                    : " Most residents are served by the regional monopoly utility, meaning efficiency is your best path to savings."}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                        <div className="shrink-0">
                            <TrendingUp className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Rank vs State Average</h3>
                            <p className="text-slate-600">
                                {cityData.name}'s estimated rate of {rate}¢/kWh is
                                {Number(rate) > stateData.profile.rate
                                    ? <span className="text-amber-600 font-bold"> higher </span>
                                    : <span className="text-green-600 font-bold"> lower </span>}
                                than the {stateData.name} average of {stateData.profile.rate}¢/kWh.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-8 bg-green-50 rounded-2xl text-center">
                    <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Get Your Exact {cityData.name} Report</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        Don't rely on averages. Input your actual home size and usage to get a custom breakdown for your specific {cityData.name} home.
                    </p>
                    <Button asChild size="lg" className="rounded-full font-bold text-lg h-14 px-8 bg-green-600 hover:bg-green-700">
                        <Link href={`/calculator?state=${stateData.slug}&city=${cityData.slug}`}>
                            Calculate My Bill
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
