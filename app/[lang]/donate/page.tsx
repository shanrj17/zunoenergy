"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DonatePage() {
    return (
        <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center px-6">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                    Support ZunoEnergy
                </h1>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    ZunoEnergy is currently focused on delivering value and stability.
                    Optional support features will be added later.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
            </div>
        </div>
    )
}
