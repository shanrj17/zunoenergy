"use client"

import { useState, useMemo } from "react"
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { Calculator } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Slider } from "@/components/ui/Slider"

export function SolarCalculator() {
    const [bill, setBill] = useState(250)
    const [roofSize, setRoofSize] = useState(600)
    const [sunHours, setSunHours] = useState(5)

    // Financial Assumptions
    const COST_PER_WATT = 3.20 // National avg turnover
    const ITC_RATE = 0.30 // 30% Federal Credit
    const UTILITY_INFLATION = 0.04 // 4% annual increase
    const SOLAR_DEGRADATION = 0.005 // 0.5% efficiency loss/year

    const results = useMemo(() => {
        // 1. System Design
        const systemSizeKw = (roofSize * 15) / 1000 // ~15W per sq ft
        const grossCost = systemSizeKw * 1000 * COST_PER_WATT
        const netCost = grossCost * (1 - ITC_RATE)

        // 2. Production
        const annualProduction = systemSizeKw * sunHours * 365
        // const initialOffset = Math.min(1.1, (annualProduction / ((bill * 12) / 0.16)))

        // 3. Projections (25 Years)
        const data = []
        let cumulativeSolarCost = -netCost
        let cumulativeUtilityCost = 0

        // Starting utility bill (annual)
        let annualBill = bill * 12

        for (let year = 0; year <= 25; year++) {
            // Utility Status Quo
            if (year > 0) {
                annualBill = annualBill * (1 + UTILITY_INFLATION)
                cumulativeUtilityCost += annualBill
            }

            // Solar Path
            if (year > 0) {
                // Production drops slightly
                const production = annualProduction * (1 - (year * SOLAR_DEGRADATION))
                const valueOfSolar = production * (0.16 * Math.pow(1 + UTILITY_INFLATION, year))
                cumulativeSolarCost += valueOfSolar
            }

            data.push({
                year: year === 0 ? 'Start' : `Yr ${year}`,
                SolarSavings: Math.round(cumulativeSolarCost),
                NoSolar: Math.round(-cumulativeUtilityCost), // Negative because it's cost
                breakOne: 0 // Zero line
            })
        }

        const totalSavings = data[25].SolarSavings + cumulativeUtilityCost // Difference at 25 years
        const paybackYear = data.find(d => d.SolarSavings > 0)

        return {
            systemSizeKw: systemSizeKw.toFixed(1),
            grossCost,
            netCost,
            totalSavings,
            paybackPeriod: paybackYear ? paybackYear.year : "25+",
            chartData: data
        }
    }, [bill, roofSize, sunHours])

    return (
        <div className="grid gap-8 lg:grid-cols-12">
            {/* LEFT: CONTROLS */}
            <Card className="lg:col-span-4 border-slate-200 shadow-sm h-fit">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                    <CardTitle className="flex items-center gap-2 text-slate-800">
                        <Calculator className="h-5 w-5 text-green-600" />
                        Customize System
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 pt-8">
                    {/* Bill Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-slate-700">Average Monthly Bill</label>
                            <span className="text-sm font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">${bill}</span>
                        </div>
                        <Slider
                            value={[bill]}
                            min={50} max={800} step={10}
                            onValueChange={(v: number[]) => setBill(v[0])}
                            className="py-2"
                        />
                        <p className="text-xs text-slate-500">
                            We assume a 4% annual rate increase from your utility.
                        </p>
                    </div>

                    {/* Roof Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-slate-700">Est. Sunny Roof Area</label>
                            <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{roofSize} sq ft</span>
                        </div>
                        <Slider
                            value={[roofSize]}
                            min={200} max={2000} step={50}
                            onValueChange={(v: number[]) => setRoofSize(v[0])}
                        />
                        <p className="text-xs text-slate-500">
                            Typically 15w of power per sq ft of roof.
                        </p>
                    </div>

                    {/* Sun Hours */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-slate-700">Daily Sun Hours</label>
                            <span className="text-sm font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full">{sunHours} hrs</span>
                        </div>
                        <Slider
                            value={[sunHours]}
                            min={2} max={8} step={0.5}
                            onValueChange={(v: number[]) => setSunHours(v[0])}
                        />
                        <div className="flex gap-2 text-xs text-slate-400">
                            <span>Seattle (3.5)</span>
                            <span className="flex-1 text-center font-bold text-orange-400">You</span>
                            <span>Phoenix (7.0)</span>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-600">Federal Tax Credit (ITC)</span>
                            <span className="font-bold text-green-600">30% included</span>
                        </div>
                        <div className="text-xs text-slate-400">
                            *This estimate assumes cash purchase or loan equivalent. Adjusted for 2024 ITC rates.
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* RIGHT: RESULTS */}
            <Card className="lg:col-span-8 border-slate-200 shadow-lg overflow-hidden flex flex-col">
                <CardHeader className="bg-slate-900 text-white pb-8">
                    <CardTitle className="flex justify-between items-end">
                        <div className="space-y-1">
                            <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">25-Year Net Savings</div>
                            <div className="text-5xl font-black text-green-400 tracking-tight">
                                ${results?.totalSavings?.toLocaleString()}
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-sm text-slate-300">Payback Period</div>
                            <div className="text-2xl font-bold bg-white/10 px-4 py-1 rounded-lg backdrop-blur-sm">
                                {results?.paybackPeriod}
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pt-8 min-h-[400px]">
                    <div className="h-full w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={results?.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis
                                    tickFormatter={(val) => `$${val / 1000}k`}
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" />
                                <Tooltip
                                    formatter={(val: number | undefined) => [`$${Number(val || 0).toLocaleString()}`]}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                {/* Zero Line */}
                                <Area type="monotone" dataKey="breakOne" stroke="#94a3b8" strokeWidth={1} fill="none" />

                                <Area
                                    type="monotone"
                                    dataKey="SolarSavings"
                                    stroke="#16a34a"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorSolar)"
                                    name="Solar Net Value"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>

                <div className="bg-slate-50 p-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Gross Cost</div>
                        <div className="text-lg font-bold text-slate-700">${results?.grossCost?.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Input Tax Credit</div>
                        <div className="text-lg font-bold text-green-600">-${(results?.grossCost * 0.3)?.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Net Cost</div>
                        <div className="text-lg font-bold text-slate-900 border-b-2 border-green-500 inline-block">
                            ${results?.netCost?.toLocaleString()}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
