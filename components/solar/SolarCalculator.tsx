"use client"

import { useState } from "react"
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { Calculator, Sun } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"

export function SolarCalculator() {
    const [formData, setFormData] = useState({
        bill: "200",
        roofSize: "500",
        sunHours: "5",
        costPerWatt: "3.00",
    })

    interface FinancialData {
        year: string;
        balance: number;
    }

    const [results, setResults] = useState<FinancialData[] | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const calculateROI = () => {
        const bill = parseFloat(formData.bill)
        const roofSize = parseFloat(formData.roofSize)
        const sunHours = parseFloat(formData.sunHours)
        const costPerWatt = parseFloat(formData.costPerWatt)

        // Rough estimation logic
        const systemSizeKw = (roofSize * 15) / 1000 // 15 watts per sq ft approx
        const systemCost = systemSizeKw * 1000 * costPerWatt
        const annualProductionKwh = systemSizeKw * sunHours * 365
        const electricityRate = 0.15 // $/kWh
        const annualSavings = annualProductionKwh * electricityRate

        // Payback calculation
        const data = []
        let cumulativeSavings = -systemCost
        for (let year = 0; year <= 20; year++) {
            data.push({
                year: `Year ${year}`,
                balance: Math.round(cumulativeSavings),
            })
            cumulativeSavings += annualSavings
        }

        setResults(data)
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sun className="h-5 w-5 text-yellow-500" />
                        Solar Inputs
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Electric Bill ($)</label>
                        <Input
                            name="bill"
                            type="number"
                            value={formData.bill}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Roof Area for Solar (sq ft)</label>
                        <Input
                            name="roofSize"
                            type="number"
                            value={formData.roofSize}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Peak Sun Hours (Daily Avg)</label>
                        <Input
                            name="sunHours"
                            type="number"
                            value={formData.sunHours}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Cost per Watt ($)</label>
                        <Input
                            name="costPerWatt"
                            type="number"
                            value={formData.costPerWatt}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button onClick={calculateROI} className="w-full gap-2">
                        <Calculator className="h-4 w-4" /> Calculate ROI
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Financial Projection</CardTitle>
                </CardHeader>
                <CardContent>
                    {results ? (
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={results}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="year" hide />
                                    <YAxis />
                                    <Tooltip
                                        formatter={(value: any) =>
                                            `$${value.toLocaleString()}`
                                        }
                                    />
                                    <Legend />
                                    <Bar
                                        dataKey="balance"
                                        fill="var(--color-primary)"
                                        name="Net Balance ($)"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                            <p className="mt-4 text-center text-sm text-muted-foreground">
                                *Positive balance indicates profit after system payback.
                            </p>
                        </div>
                    ) : (
                        <div className="flex h-[350px] items-center justify-center text-muted-foreground">
                            Enter details and click calculate to see projections.
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
