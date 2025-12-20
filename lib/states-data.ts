import { STATE_PROFILES } from "./calculator-data"

export const STATES_LIST = [
    { name: "Alabama", slug: "alabama", desc: "High cooling demand & humid climate", code: "AL", region: "South" },
    { name: "Alaska", slug: "alaska", desc: "High heating costs & isolate grid", code: "AK", region: "North" },
    { name: "Arizona", slug: "arizona", desc: "Abundant solar potential & TOU rates", code: "AZ", region: "SouthWest" },
    { name: "Arkansas", slug: "arkansas", desc: "Lower rates but older housing stock", code: "AR", region: "South" },
    { name: "California", slug: "california", desc: "High rates & strong solar incentives", code: "CA", region: "West" },
    { name: "Colorado", slug: "colorado", desc: "Cold winters & growing solar market", code: "CO", region: "West" },
    { name: "Connecticut", slug: "connecticut", desc: "High electricity rates in New England", code: "CT", region: "NorthEast" },
    { name: "Delaware", slug: "delaware", desc: "Moderate climate & deregulated options", code: "DE", region: "NorthEast" },
    { name: "Florida", slug: "florida", desc: "High AC usage & hurricane preparedness", code: "FL", region: "South" },
    { name: "Georgia", slug: "georgia", desc: "Hot summers driven by electric cooling", code: "GA", region: "South" },
    { name: "Hawaii", slug: "hawaii", desc: "Highest rates in the U.S.", code: "HI", region: "West" },
    { name: "Idaho", slug: "idaho", desc: "Low rates via Hydro power", code: "ID", region: "West" },
    { name: "Illinois", slug: "illinois", desc: "Cold winters & deregulated choices", code: "IL", region: "MidWest" },
    { name: "Indiana", slug: "indiana", desc: "Heavy reliance on heating in winter", code: "IN", region: "MidWest" },
    { name: "Iowa", slug: "iowa", desc: "Leader in wind energy production", code: "IA", region: "MidWest" },
    { name: "Kansas", slug: "kansas", desc: "Variable weather & wind energy growth", code: "KS", region: "MidWest" },
    { name: "Kentucky", slug: "kentucky", desc: "Low rates but high consumption", code: "KY", region: "South" },
    { name: "Louisiana", slug: "louisiana", desc: "High humidity drives AC usage", code: "LA", region: "South" },
    { name: "Maine", slug: "maine", desc: "Oil heating common & cold winters", code: "ME", region: "NorthEast" },
    { name: "Maryland", slug: "maryland", desc: "Deregulation & varied climate", code: "MD", region: "NorthEast" },
    { name: "Massachusetts", slug: "massachusetts", desc: "High rates & energy efficiency focus", code: "MA", region: "NorthEast" },
    { name: "Michigan", slug: "michigan", desc: "Cold winters & Great Lakes climate", code: "MI", region: "MidWest" },
    { name: "Minnesota", slug: "minnesota", desc: "Severe winters require efficient heating", code: "MN", region: "MidWest" },
    { name: "Mississippi", slug: "mississippi", desc: "Hot summers & lower electricity rates", code: "MS", region: "South" },
    { name: "Missouri", slug: "missouri", desc: "Mixed climate with humidity extremes", code: "MO", region: "MidWest" },
    { name: "Montana", slug: "montana", desc: "Long winters & heating importance", code: "MT", region: "West" },
    { name: "Nebraska", slug: "nebraska", desc: "Public power state & weather extremes", code: "NE", region: "MidWest" },
    { name: "Nevada", slug: "nevada", desc: "Desert climate & solar opportunities", code: "NV", region: "West" },
    { name: "New Hampshire", slug: "new-hampshire", desc: "High heating demand in winter", code: "NH", region: "NorthEast" },
    { name: "New Jersey", slug: "new-jersey", desc: "Strong solar incentives & net metering", code: "NJ", region: "NorthEast" },
    { name: "New Mexico", slug: "new-mexico", desc: "High desert climate & solar potential", code: "NM", region: "SouthWest" },
    { name: "New York", slug: "new-york", desc: "Diverse market & efficiency programs", code: "NY", region: "NorthEast" },
    { name: "North Carolina", slug: "north-carolina", desc: "Growing solar & seasonal variances", code: "NC", region: "South" },
    { name: "North Dakota", slug: "north-dakota", desc: "Severe cold & low electric rates", code: "ND", region: "MidWest" },
    { name: "Ohio", slug: "ohio", desc: "Deregulated market & heating needs", code: "OH", region: "MidWest" },
    { name: "Oklahoma", slug: "oklahoma", desc: "Wind power leader & hot summers", code: "OK", region: "South" },
    { name: "Oregon", slug: "oregon", desc: "Mild climate & eco-conscious grid", code: "OR", region: "West" },
    { name: "Pennsylvania", slug: "pennsylvania", desc: "Shopping for suppliers is common", code: "PA", region: "NorthEast" },
    { name: "Rhode Island", slug: "rhode-island", desc: "High rates & coastal weather", code: "RI", region: "NorthEast" },
    { name: "South Carolina", slug: "south-carolina", desc: "Humid subtropical climate patterns", code: "SC", region: "South" },
    { name: "South Dakota", slug: "south-dakota", desc: "Cold winters & reliable grid", code: "SD", region: "MidWest" },
    { name: "Tennessee", slug: "tennessee", desc: "TVA power & varying insulation needs", code: "TN", region: "South" },
    { name: "Texas", slug: "texas", desc: "Deregulated market & extreme heat", code: "TX", region: "South" },
    { name: "Utah", slug: "utah", desc: "High desert climate & low rates", code: "UT", region: "West" },
    { name: "Vermont", slug: "vermont", desc: "Greenest grid & focus on heat pumps", code: "VT", region: "NorthEast" },
    { name: "Virginia", slug: "virginia", desc: "Mixed climate & growing tech data load", code: "VA", region: "South" },
    { name: "Washington", slug: "washington", desc: "Hydro power keeps rates low", code: "WA", region: "West" },
    { name: "West Virginia", slug: "west-virginia", desc: "Mountain climate & electric heating", code: "WV", region: "South" },
    { name: "Wisconsin", slug: "wisconsin", desc: "Cold winters driving heating costs", code: "WI", region: "MidWest" },
    { name: "Wyoming", slug: "wyoming", desc: "Windy, cold winters & low rates", code: "WY", region: "West" },
]

export function getStateBySlug(slug: string) {
    const state = STATES_LIST.find(s => s.slug === slug)
    if (!state) return null
    return {
        ...state,
        profile: STATE_PROFILES[state.code] || STATE_PROFILES.US
    }
}

export function getStateIncentives(region: string) {
    const incentives = {
        "South": ["High-efficiency AC rebates", "Insulation tax credits", "Heat pump water heater incentives"],
        "SouthWest": ["Solar tax credits", "Battery storage rebates", "Smart thermostat programs"],
        "West": ["EV charger rebates", "Whole-home fan incentives", "Electrification grants"],
        "NorthEast": ["Heat pump incentives", "Weatherization assistance", "Oil-to-gas conversion rebates"],
        "MidWest": ["Furnace efficiency rebates", "Wind power programs", "Insulation upgrades"],
        "North": ["Heating system upgrades", "Winterization grants", "Wood stove change-outs"],
    }
    return incentives[region as keyof typeof incentives] || incentives["MidWest"]
}
