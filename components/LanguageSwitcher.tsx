"use client"

import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@/i18n-config"

export function LanguageSwitcher({ lang }: { lang: string }) {
    const pathname = usePathname()
    const router = useRouter()

    const redirectedPathName = (locale: string) => {
        if (!pathname) return "/"
        const segments = pathname.split("/")
        segments[1] = locale
        return segments.join("/")
    }

    const handleSwitch = (locale: string) => {
        const newPath = redirectedPathName(locale)
        router.push(newPath)
    }

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            <button
                onClick={() => handleSwitch("en")}
                className={`transition-colors hover:text-green-600 ${lang === "en" ? "text-gray-900 font-bold underline decoration-green-500 decoration-2 underline-offset-4" : "text-gray-500"
                    }`}
            >
                EN
            </button>
            <span className="text-gray-300">|</span>
            <button
                onClick={() => handleSwitch("es")}
                className={`transition-colors hover:text-green-600 ${lang === "es" ? "text-gray-900 font-bold underline decoration-green-500 decoration-2 underline-offset-4" : "text-gray-500"
                    }`}
            >
                ES
            </button>
        </div>
    )
}
