import { STATE_PROFILES, HOME_AGE_FACTOR, HOME_TYPE_FACTOR, OCCUPANT_FACTOR, SMART_MOVES } from "./calculator-data"
export { STATE_PROFILES, HOME_AGE_FACTOR, HOME_TYPE_FACTOR, OCCUPANT_FACTOR, SMART_MOVES }

export interface CalculatorInputs {
    zip: string
    state: string // Derived from ZIP
    homeType: keyof typeof HOME_TYPE_FACTOR
    yearBuilt: keyof typeof HOME_AGE_FACTOR
    sqFt: number
    primaryDevice: string
    hoursPerDay: number
    occupants: number
    monthlyBill?: number
    selectedMoves: string[]
}

export interface CalculationResult {
    annualSavings: number
    monthlyBefore: number
    monthlyAfter: number
    co2Saved: number // kg
    treesPlanted: number
    percentSaved: number
    topActions: typeof SMART_MOVES
    healthScore: number
    healthLabel: string
    healthExplanation: string
}

export function calculateEnergySavings(inputs: CalculatorInputs): CalculationResult {
    const profile = STATE_PROFILES[inputs.state] || STATE_PROFILES["US"]

    // 1. Calculate Baseline Bill (if not provided)
    let monthlyBill = inputs.monthlyBill || 0

    if (!monthlyBill) {
        // Estimate baseline based on factors
        const baseKwh = 800 // Average US monthly usage
        const sqFtFactor = inputs.sqFt / 1500
        const ageFactor = HOME_AGE_FACTOR[inputs.yearBuilt]
        const typeFactor = HOME_TYPE_FACTOR[inputs.homeType]
        const occFactor = 1 + (inputs.occupants - 1) * OCCUPANT_FACTOR

        // Usage context multiplier (rough estimate based on hours)
        const usageMultiplier = inputs.hoursPerDay / 6 // Normalized to 6 hours

        const estimatedKwh = baseKwh * sqFtFactor * ageFactor * typeFactor * occFactor * usageMultiplier * profile.climateFactor
        monthlyBill = estimatedKwh * profile.rate
    }

    const annualBill = monthlyBill * 12

    // 2. Calculate Savings
    let totalPercentSavings = 0
    let totalFixedSavings = 0

    inputs.selectedMoves.forEach(moveId => {
        const move = SMART_MOVES.find(m => m.id === moveId)
        if (move) {
            if (move.savingsPercent) {
                totalPercentSavings += move.savingsPercent
            }
            if (move.savingsFixed) {
                totalFixedSavings += move.savingsFixed
            }
        }
    })

    // Cap percent savings at 65%
    if (totalPercentSavings > 0.65) totalPercentSavings = 0.65

    // Calculate monetary savings
    const savingsFromPercent = annualBill * totalPercentSavings
    const totalAnnualSavings = savingsFromPercent + totalFixedSavings

    // Ensure we don't save more than the bill
    const finalAnnualSavings = Math.min(totalAnnualSavings, annualBill * 0.9) // Cap at 90% of bill max

    // 3. Calculate CO2
    // $1 saved ~= (1 / rate) kWh saved
    const kwhSaved = finalAnnualSavings / profile.rate
    const co2Saved = kwhSaved * profile.co2PerKwh
    const treesPlanted = co2Saved / 21 // 1 tree = 21kg CO2

    // 4. Monthly Breakdown
    const monthlyBefore = monthlyBill
    const monthlyAfter = (annualBill - finalAnnualSavings) / 12

    // 5. Top Actions (just return selected ones with descriptions)
    const topActions = SMART_MOVES.filter(m => inputs.selectedMoves.includes(m.id))

    // 6. Health Score Calculation
    let score = 60 // Base score

    // Home Age
    if (inputs.yearBuilt === "Post-2000") score += 15
    else if (inputs.yearBuilt === "1980-2000") score += 5
    else score -= 10

    // Usage
    if (inputs.hoursPerDay < 6) score += 10
    else if (inputs.hoursPerDay > 10) score -= 10

    // Improvements (Bonus)
    score += inputs.selectedMoves.length * 5

    // Clamp
    score = Math.max(25, Math.min(95, score))

    let healthLabel = "Fair"
    if (score >= 80) healthLabel = "Excellent"
    else if (score >= 60) healthLabel = "Good"
    else if (score < 40) healthLabel = "Poor"

    return {
        annualSavings: Math.round(finalAnnualSavings),
        monthlyBefore: Math.round(monthlyBefore),
        monthlyAfter: Math.round(monthlyAfter),
        co2Saved: Math.round(co2Saved),
        treesPlanted: Math.round(treesPlanted * 10) / 10, // 1 decimal
        percentSaved: Math.round((finalAnnualSavings / annualBill) * 100),
        topActions,
        healthScore: score,
        healthLabel,
        healthExplanation: `Based on your home's age, size, and usage habits.`
    }
}
