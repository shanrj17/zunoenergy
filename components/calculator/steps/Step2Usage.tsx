import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { CalculatorInputs } from "@/lib/calculator-logic"
import { Button } from "@/components/ui/Button"

interface Step2Props {
    data: Partial<CalculatorInputs>
    onUpdate: (data: Partial<CalculatorInputs>) => void
    onNext: () => void
    onBack: () => void
}

export function Step2Usage({ data, onUpdate, onNext, onBack }: Step2Props) {
    const isValid = data.primaryDevice && data.hoursPerDay && data.occupants

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">2. Usage Context</h2>
                <p className="text-muted-foreground">How do you use energy in your home?</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label>Primary Cooling/Heating Device</Label>
                    <Select value={data.primaryDevice} onValueChange={(val) => onUpdate({ primaryDevice: val })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select device" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Central AC">Central AC</SelectItem>
                            <SelectItem value="Heat Pump">Heat Pump</SelectItem>
                            <SelectItem value="Window Units">Window Units</SelectItem>
                            <SelectItem value="Electric Furnace">Electric Furnace</SelectItem>
                            <SelectItem value="Fans Only">Fans Only</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="hours">Avg. Usage Hours / Day</Label>
                    <Input
                        id="hours"
                        type="number"
                        min={0}
                        max={24}
                        placeholder="6"
                        value={data.hoursPerDay || ""}
                        onChange={(e) => onUpdate({ hoursPerDay: parseInt(e.target.value) || 0 })}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="occupants">Number of Occupants</Label>
                    <Input
                        id="occupants"
                        type="number"
                        min={1}
                        placeholder="2"
                        value={data.occupants || ""}
                        onChange={(e) => onUpdate({ occupants: parseInt(e.target.value) || 0 })}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="bill">Avg. Monthly Electric Bill ($) <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                    <Input
                        id="bill"
                        type="number"
                        placeholder="Leave empty to estimate"
                        value={data.monthlyBill || ""}
                        onChange={(e) => onUpdate({ monthlyBill: e.target.value ? parseInt(e.target.value) : undefined })}
                    />
                </div>
            </div>

            {/* NEIGHBOR COMPARISON LOGIC HOOK */}
            {data.monthlyBill && (
                <div className={`mt-6 p-4 rounded-lg border-l-4 ${data.monthlyBill > 135 ? "bg-amber-50 border-amber-500 text-amber-900" : "bg-green-50 border-green-500 text-green-900"}`}>
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">{data.monthlyBill > 135 ? "⚠️" : "✅"}</span>
                        <div>
                            <p className="font-bold text-sm uppercase tracking-wide opacity-80 mb-1">US National Grid Comparison</p>
                            <p className="text-lg font-medium leading-tight">
                                You are paying <span className="font-bold">{data.monthlyBill > 135 ? `$${data.monthlyBill - 135} MORE` : `$${135 - data.monthlyBill} LESS`}</span> than the US national average ($135/mo).
                            </p>
                            {data.monthlyBill > 135 && (
                                <p className="text-sm mt-2 opacity-90">
                                    Your neighbors in similar-sized {data.state ? data.state : "US"} homes typically pay less. Let's find out why.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {!data.monthlyBill && data.sqFt && (
                <div className="mt-6 p-4 rounded-lg border border-blue-100 bg-blue-50 text-blue-900">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">📊</span>
                        <div>
                            <p className="font-bold text-sm uppercase tracking-wide opacity-80 mb-1">Estimate</p>
                            <p className="text-lg font-medium leading-tight">
                                Based on your {data.sqFt} sq ft home, the average US bill would be approx <span className="font-bold">${Math.round(data.sqFt * 0.09)}/mo</span>.
                            </p>
                            <p className="text-sm mt-2 opacity-90">
                                Enter your exact bill above for a precise neighbor comparison.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} size="lg">
                    Back
                </Button>
                <Button onClick={onNext} disabled={!isValid} size="lg">
                    Next Step
                </Button>
            </div>
        </div>
    )
}
