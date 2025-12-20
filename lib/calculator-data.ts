// State-level profiles (mock data based on US averages)
export const STATE_PROFILES: Record<string, { rate: number; climateFactor: number; co2PerKwh: number }> = {
    AL: { rate: 0.14, climateFactor: 1.2, co2PerKwh: 0.38 },
    AK: { rate: 0.24, climateFactor: 1.5, co2PerKwh: 0.45 },
    AZ: { rate: 0.13, climateFactor: 1.4, co2PerKwh: 0.40 },
    AR: { rate: 0.12, climateFactor: 1.1, co2PerKwh: 0.48 },
    CA: { rate: 0.26, climateFactor: 0.9, co2PerKwh: 0.22 },
    CO: { rate: 0.14, climateFactor: 1.1, co2PerKwh: 0.55 },
    CT: { rate: 0.24, climateFactor: 1.1, co2PerKwh: 0.25 },
    DE: { rate: 0.15, climateFactor: 1.0, co2PerKwh: 0.40 },
    FL: { rate: 0.15, climateFactor: 1.3, co2PerKwh: 0.42 },
    GA: { rate: 0.14, climateFactor: 1.2, co2PerKwh: 0.38 },
    HI: { rate: 0.42, climateFactor: 0.8, co2PerKwh: 0.70 },
    ID: { rate: 0.11, climateFactor: 1.1, co2PerKwh: 0.15 },
    IL: { rate: 0.16, climateFactor: 1.2, co2PerKwh: 0.35 },
    IN: { rate: 0.15, climateFactor: 1.1, co2PerKwh: 0.65 },
    IA: { rate: 0.14, climateFactor: 1.2, co2PerKwh: 0.45 },
    KS: { rate: 0.14, climateFactor: 1.2, co2PerKwh: 0.50 },
    KY: { rate: 0.12, climateFactor: 1.1, co2PerKwh: 0.75 },
    LA: { rate: 0.12, climateFactor: 1.3, co2PerKwh: 0.45 },
    ME: { rate: 0.23, climateFactor: 1.3, co2PerKwh: 0.18 },
    MD: { rate: 0.16, climateFactor: 1.0, co2PerKwh: 0.35 },
    MA: { rate: 0.28, climateFactor: 1.0, co2PerKwh: 0.28 },
    MI: { rate: 0.18, climateFactor: 1.2, co2PerKwh: 0.45 },
    MN: { rate: 0.15, climateFactor: 1.4, co2PerKwh: 0.40 },
    MS: { rate: 0.13, climateFactor: 1.2, co2PerKwh: 0.42 },
    MO: { rate: 0.13, climateFactor: 1.2, co2PerKwh: 0.68 },
    MT: { rate: 0.13, climateFactor: 1.3, co2PerKwh: 0.50 },
    NE: { rate: 0.12, climateFactor: 1.2, co2PerKwh: 0.55 },
    NV: { rate: 0.16, climateFactor: 1.3, co2PerKwh: 0.35 },
    NH: { rate: 0.22, climateFactor: 1.2, co2PerKwh: 0.15 },
    NJ: { rate: 0.17, climateFactor: 1.0, co2PerKwh: 0.25 },
    NM: { rate: 0.14, climateFactor: 1.1, co2PerKwh: 0.55 },
    NY: { rate: 0.23, climateFactor: 1.1, co2PerKwh: 0.20 },
    NC: { rate: 0.13, climateFactor: 1.1, co2PerKwh: 0.32 },
    ND: { rate: 0.12, climateFactor: 1.5, co2PerKwh: 0.60 },
    OH: { rate: 0.15, climateFactor: 1.1, co2PerKwh: 0.55 },
    OK: { rate: 0.13, climateFactor: 1.2, co2PerKwh: 0.45 },
    OR: { rate: 0.13, climateFactor: 1.0, co2PerKwh: 0.18 },
    PA: { rate: 0.17, climateFactor: 1.1, co2PerKwh: 0.35 },
    RI: { rate: 0.24, climateFactor: 1.0, co2PerKwh: 0.28 },
    SC: { rate: 0.14, climateFactor: 1.2, co2PerKwh: 0.30 },
    SD: { rate: 0.13, climateFactor: 1.4, co2PerKwh: 0.35 },
    TN: { rate: 0.12, climateFactor: 1.1, co2PerKwh: 0.35 },
    TX: { rate: 0.14, climateFactor: 1.4, co2PerKwh: 0.45 },
    UT: { rate: 0.12, climateFactor: 1.1, co2PerKwh: 0.55 },
    VT: { rate: 0.21, climateFactor: 1.3, co2PerKwh: 0.05 },
    VA: { rate: 0.14, climateFactor: 1.0, co2PerKwh: 0.32 },
    WA: { rate: 0.11, climateFactor: 1.0, co2PerKwh: 0.10 },
    WV: { rate: 0.14, climateFactor: 1.1, co2PerKwh: 0.80 },
    WI: { rate: 0.16, climateFactor: 1.3, co2PerKwh: 0.55 },
    WY: { rate: 0.12, climateFactor: 1.3, co2PerKwh: 0.85 },
    // Default fallback
    US: { rate: 0.16, climateFactor: 1.0, co2PerKwh: 0.40 },
}

export const HOME_AGE_FACTOR = {
    "Pre-1980": 1.3, // Less efficient
    "1980-2000": 1.1,
    "Post-2000": 1.0, // Baseline
}

export const HOME_TYPE_FACTOR = {
    "House": 1.0,
    "Townhome": 0.85,
    "Apartment": 0.7,
}

export const OCCUPANT_FACTOR = 0.15 // Per person add-on

export const SMART_MOVES = [
    {
        id: "behavioral",
        label: "Adjust Habits",
        description: "Set thermostat back 2°F and unplug unused devices to reduce passive waste.",
        savingsPercent: 0.10, // 10%
        cost: 0,
    },
    {
        id: "filter",
        label: "Replace AC Filter",
        description: "Improves airflow efficiency immediately, lowering cooling costs by 5-15%.",
        savingsPercent: 0.08,
        cost: 20,
    },
    {
        id: "fans",
        label: "Use Fans Correctly",
        description: "Circulate air to feel cooler, allowing you to run AC less often without discomfort.",
        savingsPercent: 0.07,
        cost: 0,
    },
    {
        id: "insulation",
        label: "Seal Air Leaks",
        description: "Stop conditioned air from escaping to permanently lower heating and cooling loads.",
        savingsPercent: 0.15,
        cost: 500,
    },
    {
        id: "led",
        label: "Upgrade to LEDs",
        description: "Cut lighting energy use by 75% instantly with bulbs that last years.",
        savingsFixed: 150, // $150/year fixed savings estimate
        cost: 50,
    },
]
