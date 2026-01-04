// Whitelist for gradual city page rollout.
// Only cities in this list will be indexable.
// Initial Batch: ~10 Cities
export const INDEXABLE_CITIES = [
    "houston", "dallas", "austin", "san-antonio", // TX
    "los-angeles", "san-diego", "san-francisco",  // CA
    "miami", "orlando", "tampa",                  // FL
    "chicago",                                    // IL
    "new-york"                                    // NY
]

export function isCityIndexable(slug: string): boolean {
    return INDEXABLE_CITIES.includes(slug)
}
