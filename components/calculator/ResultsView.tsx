import { CalculationResult } from "@/lib/calculator-logic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"
import { Leaf, TreeDeciduous, Mail, ArrowRight, ShieldCheck } from "lucide-react"
import { useState } from "react"

import { generateEnergyInsights } from "@/app/actions"
import { useEffect } from "react"
import confetti from "canvas-confetti"

interface ResultsViewProps {
    results: CalculationResult
    inputs: any // Pass inputs for AI analysis
    onReset: () => void
}

export function ResultsView({ results, inputs, onReset }: ResultsViewProps) {
    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)
    const [insights, setInsights] = useState<string[]>([])

    useEffect(() => {
        if (results.annualSavings > 0) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })
        }
    }, [results.annualSavings])

    useEffect(() => {
        const fetchInsights = async () => {
            const data = await generateEnergyInsights({
                state: inputs.state,
                homeType: inputs.homeType,
                yearBuilt: inputs.yearBuilt,
                hoursPerDay: inputs.hoursPerDay,
                selectedMoves: inputs.selectedMoves
            })
            if (data?.insights) {
                setInsights(data.insights)
            }
        }
        fetchInsights()
    }, [inputs])

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            try {
                // Send to API
                await fetch('/api/calculator-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email,
                        savings: results.annualSavings,
                        state: inputs.state
                    })
                })
            } catch (err) {
                console.error("Failed to sync lead", err)
            }

            // Log to localStorage as requested for backup
            const logData = {
                email,
                date: new Date().toISOString(),
                savings: results.annualSavings,
            }
            const existingLogs = JSON.parse(localStorage.getItem("zuno_leads") || "[]")
            localStorage.setItem("zuno_leads", JSON.stringify([...existingLogs, logData]))

            setEmailSent(true)
        }
    }

    const chartData = [
        { name: "Monthly Bill", Before: results.monthlyBefore, After: results.monthlyAfter },
    ]

    const savingsComparison = results.annualSavings > results.monthlyBefore
        ? "That's like removing one full month from your yearly electricity bill."
        : "Enough to cover your internet bill for the year."

    const drivingMiles = Math.round(results.co2Saved / 0.404)

    const healthDiagnosis = inputs.yearBuilt === "Pre-1980"
        ? "Your home's age and likely air leakage are driving higher energy waste."
        : inputs.hoursPerDay > 8
            ? "High daily usage is the primary factor increasing your costs."
            : "Most energy loss is likely coming from cooling inefficiency."

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto py-8">

            {/* 1. Primary Result: Annual Savings */}
            <div className="text-center space-y-4">
                <h2 className="text-lg font-medium text-muted-foreground uppercase tracking-widest">Estimated Annual Savings</h2>
                <div className="text-6xl font-extrabold text-green-700 tracking-tight">
                    ${results.annualSavings.toLocaleString()}
                </div>
                <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto leading-relaxed">
                    {savingsComparison}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Estimates are based on U.S. Department of Energy averages and state-level data.</span>
                </div>
            </div>

            {/* 2. Monthly Comparison */}
            <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">Monthly Bill Impact</CardTitle>
                    <p className="text-sm text-muted-foreground">See how your costs drop after simple improvements</p>
                </CardHeader>
                <CardContent className="h-[280px] max-w-2xl mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" hide />
                            <Tooltip
                                formatter={(value: any) => [`$${value}`, "Monthly Cost"]}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend formatter={(value) => <span className="text-gray-600 font-medium ml-2">{value}</span>} />
                            <Bar dataKey="Before" name="Current Bill" fill="#94a3b8" radius={[0, 6, 6, 0]} barSize={48} />
                            <Bar dataKey="After" name="Potential Bill" fill="#16a34a" radius={[0, 6, 6, 0]} barSize={48} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* 3. Grid: Health Score & Impact */}
            <div className="grid gap-8 md:grid-cols-2">
                {/* Health Score */}
                <Card className="border-green-100 bg-green-50/30 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-50" />
                    <CardHeader>
                        <CardTitle className="text-green-900 flex items-center gap-2">
                            Energy Health Score
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-4 relative z-10">
                        <div className="relative flex items-center justify-center h-28 w-28 rounded-full border-[6px] border-green-200 bg-white shadow-sm">
                            <span className="text-3xl font-bold text-green-700">{results.healthScore}</span>
                        </div>
                        <div className="mt-4 text-center">
                            <div className="text-xl font-bold text-green-900">{results.healthLabel}</div>
                            <p className="text-sm text-green-800/80 mt-1 max-w-[200px] mx-auto italic">
                                {results.healthExplanation}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Environmental Impact */}
                <Card className="border-blue-100 bg-blue-50/30">
                    <CardHeader>
                        <CardTitle className="text-blue-900">Environmental Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                <Leaf className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{results.co2Saved.toLocaleString()} kg</div>
                                <div className="text-sm text-muted-foreground">CO₂ Reduced per Year</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                <TreeDeciduous className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{results.treesPlanted}</div>
                                <div className="text-sm text-muted-foreground">Tree Seedlings Grown</div>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-blue-100 text-sm text-blue-800">
                            That's equal to driving <span className="font-bold">{drivingMiles.toLocaleString()}</span> fewer miles.
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 4. Top Actions */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-green-500 rounded-full" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Top 3 Actions for Your Home</h3>
                        <p className="text-sm text-muted-foreground">Prioritized by impact and ease of installation.</p>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {results.topActions.slice(0, 3).map((action, idx) => (
                        <Card key={action.id} className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg text-gray-900 flex items-start justify-between gap-2">
                                    <span>{action.label}</span>
                                    {idx === 0 && <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide font-bold">First Step</span>}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 leading-relaxed">{action.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* 5. AI Insights */}
            <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100 overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-indigo-900 flex items-center gap-2">
                        Why This Matters
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {insights.length > 0 ? (
                        <ul className="space-y-4">
                            {insights.map((insight, i) => {
                                // Simple parsing to bold the "Cause" part if it matches structure
                                // Or just display cleanly
                                return (
                                    <li key={i} className="flex gap-3 text-[15px] text-gray-700 leading-relaxed">
                                        <ArrowRight className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        <span>{insight}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    ) : (
                        <div className="space-y-3 animate-pulse">
                            <div className="h-4 bg-indigo-100 rounded w-3/4"></div>
                            <div className="h-4 bg-indigo-100 rounded w-full"></div>
                            <p className="text-xs text-indigo-400 mt-2">Generating personalized insights...</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Email Capture */}
            <Card className="bg-gray-50 border-gray-200 mt-12">
                <CardContent className="pt-6">
                    {!emailSent ? (
                        <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                            <div className="space-y-1 text-center sm:text-left flex-1">
                                <h4 className="font-semibold text-gray-900 text-lg">Send me my energy plan</h4>
                                <p className="text-sm text-gray-600">Save these results and get a long-term improvement checklist.</p>
                                <p className="text-xs text-green-600 font-medium pt-1 flex items-center gap-1 sm:justify-start justify-center">
                                    <ShieldCheck className="h-3 w-3" /> No sales calls. No utility affiliation.
                                </p>
                            </div>
                            <div className="flex w-full sm:w-auto gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white border-gray-300"
                                />
                                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap px-6">
                                    Email Plan
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-4 text-green-800 font-medium bg-green-50 rounded-lg border border-green-100">
                            Thanks! Your personalized plan has been sent to {email}.
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="text-center pt-8">
                <Button variant="ghost" onClick={onReset} className="text-gray-500 hover:text-gray-900">
                    Start New Checkup
                </Button>
                <p className="mt-6 text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
                    Disclaimer: Estimates are for educational purposes only and do not guarantee savings. Actual results vary based on weather, home condition, and rate changes. ZunoEnergy is an independent tool and is not affiliated with your utility provider.
                </p>
            </div>
        </div>
    )
}
