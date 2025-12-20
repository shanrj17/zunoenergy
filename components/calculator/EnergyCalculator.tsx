"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calculator, Check, Home, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { cn } from "@/lib/utils"

const appliancesList = [
    { id: "ac", label: "Air Conditioning" },
    { id: "heater", label: "Electric Heater" },
    { id: "washer", label: "Washer/Dryer" },
    { id: "dishwasher", label: "Dishwasher" },
    { id: "fridge", label: "Old Refrigerator" },
    { id: "ev", label: "EV Charger" },
]

export function EnergyCalculator() {
    const searchParams = useSearchParams()
    const defaultState = searchParams.get("state") || ""

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        state: defaultState,
        bill: "",
        homeSize: "",
        appliances: [] as string[],
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const toggleAppliance = (id: string) => {
        setFormData((prev) => {
            const appliances = prev.appliances.includes(id)
                ? prev.appliances.filter((a) => a !== id)
                : [...prev.appliances, id]
            return { ...prev, appliances }
        })
    }

    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)

    const calculate = () => {
        // TODO: Implement calculation logic and redirect/show results
        console.log("Calculating...", formData)
        // For now just log
    }

    return (
        <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex justify-center">
                <div className="flex items-center gap-2">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium transition-colors",
                                step === i
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : step > i
                                        ? "border-primary bg-primary/20 text-primary"
                                        : "border-muted bg-muted text-muted-foreground"
                            )}
                        >
                            {step > i ? <Check className="h-4 w-4" /> : i}
                        </div>
                    ))}
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-center">
                        {step === 1 && "Basic Information"}
                        {step === 2 && "Home Details"}
                        {step === 3 && "Appliances & Usage"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">State</label>
                                    <Input
                                        name="state"
                                        placeholder="e.g. California"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">
                                        Average Monthly Bill ($)
                                    </label>
                                    <Input
                                        name="bill"
                                        type="number"
                                        placeholder="200"
                                        value={formData.bill}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">
                                        Home Size (sq ft)
                                    </label>
                                    <Input
                                        name="homeSize"
                                        type="number"
                                        placeholder="2000"
                                        value={formData.homeSize}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="rounded-md bg-muted p-4">
                                    <div className="flex items-start gap-3">
                                        <Home className="mt-0.5 h-5 w-5 text-primary" />
                                        <div className="text-sm">
                                            <p className="font-medium">Why do we need this?</p>
                                            <p className="text-muted-foreground">
                                                To estimate heating and cooling efficiency based on square
                                                footage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="grid grid-cols-2 gap-4">
                                {appliancesList.map((appliance) => (
                                    <div
                                        key={appliance.id}
                                        onClick={() => toggleAppliance(appliance.id)}
                                        className={cn(
                                            "cursor-pointer rounded-lg border p-4 transition-all hover:border-primary",
                                            formData.appliances.includes(appliance.id)
                                                ? "border-primary bg-primary/10"
                                                : "bg-card"
                                        )}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">
                                                {appliance.label}
                                            </span>
                                            {formData.appliances.includes(appliance.id) && (
                                                <Check className="h-4 w-4 text-primary" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    <div className="mt-8 flex justify-between">
                        <Button
                            variant="outline"
                            onClick={prevStep}
                            disabled={step === 1}
                        >
                            Back
                        </Button>
                        {step < 3 ? (
                            <Button onClick={nextStep}>Next</Button>
                        ) : (
                            <Button onClick={calculate} className="gap-2">
                                <Calculator className="h-4 w-4" /> Calculate Savings
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
