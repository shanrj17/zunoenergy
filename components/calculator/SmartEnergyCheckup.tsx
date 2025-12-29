"use client"

import { useState } from "react"
import { CalculatorInputs, calculateEnergySavings, CalculationResult } from "@/lib/calculator-logic"
import { Step1Location } from "./steps/Step1Location"
import { Step2Usage } from "./steps/Step2Usage"
import { Step3SmartMoves } from "./steps/Step3SmartMoves"
import { ResultsView } from "./ResultsView"
import { Card, CardContent } from "@/components/ui/Card"

export function SmartEnergyCheckup() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<Partial<CalculatorInputs>>({
        hoursPerDay: 6,
        occupants: 2,
        sqFt: 1500,
        selectedMoves: [],
    })
    const [results, setResults] = useState<CalculationResult | null>(null)

    const updateData = (newData: Partial<CalculatorInputs>) => {
        setFormData((prev) => ({ ...prev, ...newData }))
    }

    const handleCalculate = () => {
        if (formData.zip && formData.state && formData.homeType && formData.yearBuilt && formData.sqFt && formData.primaryDevice && formData.hoursPerDay && formData.occupants && formData.selectedMoves) {
            const res = calculateEnergySavings(formData as CalculatorInputs)
            setResults(res)
        }
    }

    const handleReset = () => {
        setStep(1)
        setResults(null)
        setFormData({
            hoursPerDay: 6,
            occupants: 2,
            sqFt: 1500,
            selectedMoves: [],
        })
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            {!results ? (
                <Card className="border-t-4 border-t-primary shadow-lg">
                    <CardContent className="pt-6">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-muted-foreground">Step {step} of 3</span>
                                <span className="text-sm font-medium text-primary">{Math.round((step / 3) * 100)}% Complete</span>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-500 ease-in-out"
                                    style={{ width: `${(step / 3) * 100}%` }}
                                />
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-center mb-6">
                            No signup required. You can see your results before we ever ask for an email.
                        </p>

                        {step === 1 && (
                            <Step1Location
                                data={formData}
                                onUpdate={updateData}
                                onNext={() => setStep(2)}
                            />
                        )}
                        {step === 2 && (
                            <Step2Usage
                                data={formData}
                                onUpdate={updateData}
                                onNext={() => setStep(3)}
                                onBack={() => setStep(1)}
                            />
                        )}
                        {step === 3 && (
                            <Step3SmartMoves
                                data={formData}
                                onUpdate={updateData}
                                onCalculate={handleCalculate}
                                onBack={() => setStep(2)}
                            />
                        )}
                    </CardContent>
                </Card>
            ) : (
                <ResultsView results={results} inputs={formData} onReset={handleReset} />
            )}
        </div>
    )
}
