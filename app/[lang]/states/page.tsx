import { Metadata } from "next"
import StatesList from "@/components/states/StatesList"

export const metadata: Metadata = {
    title: "US Energy Rates & Savings by State | ZunoEnergy",
    description: "Explore electricity rates, incentives, and home energy saving tips for all 50 US states.",
    alternates: {
        canonical: "/states",
    },
}

export default function StatesPage() {
    return <StatesList />
}
