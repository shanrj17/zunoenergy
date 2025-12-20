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
