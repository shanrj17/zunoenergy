export const CITIES_LIST: Record<string, { name: string, slug: string, population: number }[]> = {
    "california": [
        { name: "Los Angeles", slug: "los-angeles", population: 3898747 },
        { name: "San Diego", slug: "san-diego", population: 1386932 },
        { name: "San Jose", slug: "san-jose", population: 1013240 },
        { name: "San Francisco", slug: "san-francisco", population: 873965 },
        { name: "Fresno", slug: "fresno", population: 542107 },
    ],
    "texas": [
        { name: "Houston", slug: "houston", population: 2304580 },
        { name: "San Antonio", slug: "san-antonio", population: 1434625 },
        { name: "Dallas", slug: "dallas", population: 1304379 },
        { name: "Austin", slug: "austin", population: 961855 },
        { name: "Fort Worth", slug: "fort-worth", population: 918915 },
    ],
    "florida": [
        { name: "Jacksonville", slug: "jacksonville", population: 949611 },
        { name: "Miami", slug: "miami", population: 442241 },
        { name: "Tampa", slug: "tampa", population: 384959 },
        { name: "Orlando", slug: "orlando", population: 307573 },
        { name: "St. Petersburg", slug: "st-petersburg", population: 258308 },
    ],
    "new-york": [
        { name: "New York City", slug: "new-york-city", population: 8804190 },
        { name: "Buffalo", slug: "buffalo", population: 278349 },
        { name: "Rochester", slug: "rochester", population: 211328 },
        { name: "Yonkers", slug: "yonkers", population: 211569 },
        { name: "Syracuse", slug: "syracuse", population: 148620 },
    ],
    "illinois": [
        { name: "Chicago", slug: "chicago", population: 2746388 },
        { name: "Aurora", slug: "aurora", population: 180542 },
        { name: "Naperville", slug: "naperville", population: 149540 },
        { name: "Joliet", slug: "joliet", population: 150362 },
        { name: "Rockford", slug: "rockford", population: 148655 },
    ],
    // Fallback generic list for other states to demonstrate functionality
    "default": [
        { name: "Capital City", slug: "capital-city", population: 50000 },
        { name: "Major City", slug: "major-city", population: 100000 },
    ]
}

export function getCitiesByState(stateSlug: string) {
    return CITIES_LIST[stateSlug] || []
}

export function getCityBySlug(stateSlug: string, citySlug: string) {
    const cities = getCitiesByState(stateSlug)
    return cities.find(c => c.slug === citySlug)
}
