import { CalculatorInputs, SMART_MOVES } from "@/lib/calculator-logic"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

interface Step3Props {
    data: Partial<CalculatorInputs>
    onUpdate: (data: Partial<CalculatorInputs>) => void
    onCalculate: () => void
    onBack: () => void
}

export function Step3SmartMoves({ data, onUpdate, onCalculate, onBack }: Step3Props) {
    const selectedMoves = data.selectedMoves || []

    const toggleMove = (id: string) => {
        if (selectedMoves.includes(id)) {
            onUpdate({ selectedMoves: selectedMoves.filter((m) => m !== id) })
        } else {
            onUpdate({ selectedMoves: [...selectedMoves, id] })
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">3. Smart Moves</h2>
                <p className="text-muted-foreground">Select actions you are willing to take to see potential savings.</p>
            </div>

            <div className="grid gap-4">
                {SMART_MOVES.map((move) => (
                    <div key={move.id} className="flex items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                        <Checkbox
                            id={move.id}
                            checked={selectedMoves.includes(move.id)}
                            onCheckedChange={() => toggleMove(move.id)}
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label
                                htmlFor={move.id}
                                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {move.label}
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                {move.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} size="lg">
                    Back
                </Button>
                <Button onClick={onCalculate} size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Show My Results
                </Button>
            </div>
        </div>
    )
}
