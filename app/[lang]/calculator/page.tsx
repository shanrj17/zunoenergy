"use client"

import { SmartEnergyCheckup } from "@/components/calculator/SmartEnergyCheckup"

export default function CalculatorPage() {
    return (
        <div className="container py-10">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-800">
                    ZunoEnergy Smart Energy Checkup™
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    A smart, honest energy guide for American homes. Get a personalized savings estimate in 3 simple steps.
                </p>
            </div>

            <SmartEnergyCheckup />
        </div>
    )
}
