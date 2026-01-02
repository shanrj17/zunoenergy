import Link from "next/link"
import Image from "next/image"

export function Footer({ lang, dict }: { lang: string, dict: any }) {
    const getLink = (path: string) => `/${lang}${path === '/' ? '' : path}`

    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-12">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
                    {/* COLUMN 1: BRAND */}
                    <div className="space-y-4">
                        <Link href={getLink('/')} className="flex items-center gap-2 group mb-4">
                            <div className="relative h-6 w-6">
                                <Image
                                    src="/logo.png"
                                    alt="ZunoEnergy Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-lg text-gray-900">
                                ZunoEnergy
                            </span>
                        </Link>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                            {dict?.brandDescription}
                        </p>
                        <div className="text-xs font-medium text-gray-400 pt-2">
                            Independent • Ad-free • Education-first
                        </div>
                    </div>

                    {/* COLUMN 2: TOOLS */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">{dict?.calculators}</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href={getLink('/smart-energy-checkup')} className="hover:text-green-700 transition-colors">{dict?.smartCheckup}</Link>
                            </li>
                            <li>
                                <Link href={getLink('/calculator')} className="hover:text-green-700 transition-colors">Energy Calculator</Link>
                            </li>
                            <li>
                                <Link href={getLink('/solar')} className="hover:text-green-700 transition-colors">Solar ROI</Link>
                            </li>
                            <li>
                                <Link href={getLink('/states')} className="hover:text-green-700 transition-colors">State Energy Guides</Link>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 3: LEARN */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">{dict?.learn}</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href={getLink('/learn/energy-tips')} className="hover:text-green-700 transition-colors">Energy Tips</Link>
                            </li>
                            <li>
                                <Link href={getLink('/states')} className="hover:text-green-700 transition-colors">State Energy Guides</Link>
                            </li>
                            <li>
                                <span className="text-gray-400 cursor-not-allowed">Smart Home Basics (Soon)</span>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 3.5: POPULAR CITIES (SEO) */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Popular Cities</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href={getLink('/states/texas/houston')} className="hover:text-green-700 transition-colors">Houston Electric Bill</Link></li>
                            <li><Link href={getLink('/states/california/los-angeles')} className="hover:text-green-700 transition-colors">Los Angeles Rates</Link></li>
                            <li><Link href={getLink('/states/new-york/new-york-city')} className="hover:text-green-700 transition-colors">NYC Energy Audit</Link></li>
                            <li><Link href={getLink('/states/illinois/chicago')} className="hover:text-green-700 transition-colors">Chicago Savings</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: ABOUT & SUPPORT */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">{dict?.about} & Support</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href={getLink('/about')} className="hover:text-green-700 transition-colors">{dict?.about} ZunoEnergy</Link>
                            </li>
                            <li>
                                <Link href={getLink('/contact')} className="hover:text-green-700 transition-colors">{dict?.contact}</Link>
                            </li>
                            <li>
                                <Link href={getLink('/privacy-policy')} className="hover:text-green-700 transition-colors">{dict?.privacyPolicy}</Link>
                            </li>
                            <li>
                                <Link href={getLink('/terms-and-conditions')} className="hover:text-green-700 transition-colors">{dict?.termsConditions}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
                    <div>
                        © {new Date().getFullYear()} ZunoEnergy
                    </div>
                    <div>
                        Estimates are informational only. Actual energy usage may vary. <br className="hidden md:block" />
                        Data sources include U.S. DOE and regional averages.
                    </div>
                </div>
            </div>
        </footer>
    )
}
