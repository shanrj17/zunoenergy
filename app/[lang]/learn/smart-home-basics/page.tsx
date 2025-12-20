import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export const metadata = {
    title: "Smart Home Basics | Learn | ZunoEnergy",
    description: "Simple, practical ways homeowners can use smart devices to reduce energy waste.",
}

export default function SmartHomeBasicsPage() {
    return (
        <div className="bg-white min-h-screen py-12 px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <div className="max-w-[600px] mx-auto">
                <div className="h-16 w-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Home className="h-8 w-8 text-purple-700" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Smart Home Basics</h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    This section is coming soon.
                    <br className="hidden sm:block" />
                    It will cover simple, practical ways homeowners can use smart devices to reduce energy waste.
                </p>

                <div className="inline-block p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-500 mb-10">
                    <span className="font-medium text-gray-900">What to expect:</span> Thermostat automation guides, smart plug ROI calculators, and monitoring setups.
                </div>

                <Link href="/learn" className="text-blue-600 font-medium hover:underline flex items-center justify-center">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learn
                </Link>
            </div>
        </div>
    )
}
