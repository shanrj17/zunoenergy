import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { useState } from "react"
import { CalculatorInputs, HOME_AGE_FACTOR, HOME_TYPE_FACTOR } from "@/lib/calculator-logic"
import { Button } from "@/components/ui/Button"
import { Loader2 } from "lucide-react"

interface Step1Props {
    data: Partial<CalculatorInputs>
    onUpdate: (data: Partial<CalculatorInputs>) => void
    onNext: () => void
}

export function Step1Location({ data, onUpdate, onNext }: Step1Props) {
    const [loadingZip, setLoadingZip] = useState(false)
    const [zipError, setZipError] = useState("")

    const handleZipChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const zip = e.target.value
        onUpdate({ zip })
        setZipError("")

        if (zip.length === 5) {
            setLoadingZip(true)
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${zip}`)
                if (!response.ok) throw new Error("Invalid ZIP")
                const result = await response.json()
                const state = result.places[0]["state abbreviation"]
                onUpdate({ state })
            } catch (err) {
                setZipError("Please enter a valid US ZIP code.")
                onUpdate({ state: "" })
            } finally {
                setLoadingZip(false)
            }
        }
    }

    const isValid = data.zip?.length === 5 && !zipError && data.state && data.homeType && data.yearBuilt && data.sqFt

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">1. Location & Home</h2>
                <p className="text-muted-foreground">Tell us a bit about your home to get a personalized baseline.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <div className="relative">
                        <Input
                            id="zip"
                            placeholder="90210"
                            value={data.zip || ""}
                            onChange={handleZipChange}
                            maxLength={5}
                            className={zipError ? "border-destructive" : ""}
                        />
                        {loadingZip && <Loader2 className="absolute right-3 top-2.5 h-4 w-4 animate-spin text-muted-foreground" />}
                    </div>
                    {zipError && <p className="text-xs text-destructive">{zipError}</p>}
                    {data.state && !zipError && <p className="text-xs text-green-600 font-medium">Located: {data.state}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="sqFt">Square Footage</Label>
                    <Input
                        id="sqFt"
                        type="number"
                        placeholder="1500"
                        value={data.sqFt || ""}
                        onChange={(e) => onUpdate({ sqFt: parseInt(e.target.value) || 0 })}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Home Type</Label>
                    <Select value={data.homeType} onValueChange={(val) => onUpdate({ homeType: val as keyof typeof HOME_TYPE_FACTOR })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(HOME_TYPE_FACTOR).map((type) => (
                                <SelectItem key={type} value={type}>
                                    {type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Year Built</Label>
                    <Select value={data.yearBuilt} onValueChange={(val) => onUpdate({ yearBuilt: val as keyof typeof HOME_AGE_FACTOR })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(HOME_AGE_FACTOR).map((year) => (
                                <SelectItem key={year} value={year}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <Button onClick={onNext} disabled={!isValid} size="lg" className="w-full sm:w-auto">
                    Next Step
                </Button>
            </div>
        </div>
    )
}
