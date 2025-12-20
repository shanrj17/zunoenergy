import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Heart } from "lucide-react"

export default function ThankYouPage() {
    return (
        <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center">
            {/* SECTION 1: HERO */}
            <div className="text-center px-6">
                <div className="mb-8 flex justify-center">
                    <div className="h-20 w-20 bg-green-50 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                        <Heart className="h-10 w-10 text-green-600 fill-green-600" />
                    </div>
                </div>
                <h1 className="mx-auto max-w-[900px] text-4xl font-bold text-gray-900 sm:text-[52px] leading-[1.15] mb-6">
                    Thank You for <br className="hidden sm:block" />
                    <span className="text-green-700">Supporting ZunoEnergy</span>
                </h1>

                {/* SECTION 2: APPRECIATION */}
                <p className="mx-auto max-w-[680px] text-lg text-gray-600 leading-relaxed mb-12">
                    Your contribution helps keep this platform free, honest, and useful for homeowners across the United States. We truly appreciate your support in keeping ZunoEnergy independent.
                </p>

                {/* SECTION 3: RETURN ACTION */}
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white">
                        <Link href="/">Return to Home</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:bg-gray-50">
                        <Link href="/smart-energy-checkup">Run a Checkup</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
