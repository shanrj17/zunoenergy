import { SolarCalculator } from "@/components/solar/SolarCalculator"

export default function SolarPage() {
    return (
        <div className="container py-10">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Solar ROI Estimator
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Calculate the potential return on investment for installing solar panels on your home.
                </p>
            </div>
            <SolarCalculator />
        </div>
    )
}
