"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Header({ lang, dict }: { lang: string, dict: any }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    const getLink = (path: string) => `/${lang}${path === '/' ? '' : path}`

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]">
            <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href={getLink('/')} className="flex items-center space-x-2 group">
                        <div className="relative h-8 w-8">
                            <Image
                                src="/logo.png"
                                alt="ZunoEnergy Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold sm:inline-block text-xl text-gray-900 tracking-tight">
                            ZunoEnergy
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href={getLink('/smart-energy-checkup')}
                        className={cn(
                            "text-[15px] font-semibold transition-colors hover:text-green-600",
                            pathname?.includes("/smart-energy-checkup") ? "text-green-700" : "text-gray-700"
                        )}
                    >
                        {dict?.smartCheckup}
                    </Link>

                    {/* Calculators Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-[15px] font-medium text-gray-600 hover:text-green-600 transition-colors py-4">
                            {dict?.calculators}
                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full -left-4 w-60 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                            <div className="bg-white rounded-xl shadow-xl shadow-green-900/5 ring-1 ring-gray-900/5 p-2 flex flex-col">
                                <Link href={getLink('/calculator')} className="px-4 py-3 rounded-lg hover:bg-green-50 text-[15px] text-gray-700 hover:text-green-700 font-medium transition-colors">
                                    Energy Savings Calculator
                                </Link>
                                <Link href={getLink('/solar')} className="px-4 py-3 rounded-lg hover:bg-green-50 text-[15px] text-gray-700 hover:text-green-700 font-medium transition-colors">
                                    Solar ROI Calculator
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Learn Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-[15px] font-medium text-gray-600 hover:text-green-600 transition-colors py-4">
                            {dict?.learn}
                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full -left-4 w-60 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                            <div className="bg-white rounded-xl shadow-xl shadow-green-900/5 ring-1 ring-gray-900/5 p-2 flex flex-col">
                                <Link href={getLink('/learn/energy-tips')} className="px-4 py-3 rounded-lg hover:bg-green-50 text-[15px] text-gray-700 hover:text-green-700 font-medium transition-colors">
                                    Energy Tips
                                </Link>
                                <Link href={getLink('/states')} className="px-4 py-3 rounded-lg hover:bg-green-50 text-[15px] text-gray-700 hover:text-green-700 font-medium transition-colors">
                                    State Energy Guides
                                </Link>
                                <div className="px-4 py-3 rounded-lg text-[15px] text-gray-400 font-medium cursor-not-allowed">
                                    Smart Home Basics (Soon)
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={getLink('/about')}
                        className={cn(
                            "text-[15px] font-medium transition-colors hover:text-green-600",
                            pathname?.includes("/about") ? "text-green-700" : "text-gray-600"
                        )}
                    >
                        {dict?.about}
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher lang={lang} />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <LanguageSwitcher lang={lang} />
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="space-y-1 px-6 pb-6 pt-4">
                        <Link
                            href={getLink('/smart-energy-checkup')}
                            className="block rounded-lg px-3 py-3 text-base font-semibold text-green-700 bg-green-50/50"
                        >
                            {dict?.smartCheckup}
                        </Link>

                        <div className="py-2">
                            <div className="px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{dict?.calculators}</div>
                            <Link href={getLink('/calculator')} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Energy Savings Calculator
                            </Link>
                            <Link href={getLink('/solar')} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Solar ROI Calculator
                            </Link>
                        </div>

                        <div className="py-2 border-t border-gray-100">
                            <div className="px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">{dict?.learn}</div>
                            <Link href={getLink('/learn/energy-tips')} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Energy Tips
                            </Link>
                            <Link href={getLink('/states')} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                State Energy Guides
                            </Link>
                        </div>

                        <div className="border-t border-gray-100 pt-4 mt-2">
                            <Link href={getLink('/about')} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                {dict?.about}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
