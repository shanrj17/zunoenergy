"use client"

import { Suspense } from "react"
import { SmartEnergyCheckup } from "@/components/calculator/SmartEnergyCheckup"

export default function CalculatorPage() {
    return (
        <div className="container py-16 flex flex-col items-center">
            {/* Header Content */}
            <div className="mb-12 text-center max-w-3xl">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 mb-6">
                    Electric Bill Calculator & <span className="text-green-600">Home Audit</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    A smart, honest energy guide for American homes. Get a personalized savings estimate in under 60 seconds.
                    <span className="block mt-2 text-sm text-slate-400 font-semibold uppercase tracking-wider">No Email Required • 100% Free</span>
                </p>
            </div>

            {/* Main Tool */}
            <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
                <SmartEnergyCheckup />
            </Suspense>

            {/* SEO & Trust Content */}
            <div className="mt-24 max-w-4xl w-full grid gap-16">

                {/* Methodology Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900">How We Calculate Your Savings</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-slate-600">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">Based on DOE Data</h3>
                            <p>We utilize the latest consumption profiles from the U.S. Department of Energy (EIA) specific to your state's climate zone and average utility rates.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">Home-Specific Modeling</h3>
                            <p>Your home's vintage (year built) and square footage determine its "Thermal Leakage" factor, which drastically impacts heating/cooling costs.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900 border-b pb-4">Frequently Asked Questions</h2>

                    <div className="grid gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Is this calculator accurate for my specific city?</h3>
                            <p className="text-slate-600 mt-2">
                                While we use state-level averages for rates, our consumption model adjusts for your specific home size and age. For exact localized rates (e.g., Houston vs. Dallas), the tool uses a weighted average for your state.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Why don't you ask for my utility login?</h3>
                            <p className="text-slate-600 mt-2">
                                Privacy is our priority. Many tools scrape your data to sell leads. ZunoEnergy is designed to give you a "Smart Estimate" instantly without needing invasive access to your private accounts.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900">What does the "Health Score" mean?</h3>
                            <p className="text-slate-600 mt-2">
                                Your Home Energy Health Score (0-100) is a benchmark against efficient, modern construction. A score of 100 means your home performs like a net-zero 2024 new build. A score below 50 indicates significant waste from older insulation or HVAC.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
