"use client"

import Link from "next/link"

export function Hero({ dict }: { dict: any }) {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-green-50/50 via-white to-white">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffdb] to-[#4ade80] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>

            <div className="mx-auto max-w-[1320px] px-6 pt-[72px] pb-[88px] lg:px-8">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white/50 backdrop-blur-sm shadow-sm">
                        {dict?.noSignup}
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="mx-auto max-w-[900px] text-4xl font-bold text-gray-900 sm:text-[52px] leading-[1.15] drop-shadow-sm">
                        {dict?.heroTitle}
                    </h1>
                    <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.6] text-gray-600">
                        {dict?.heroSubtitle}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/calculator"
                            className="rounded-full bg-green-600 px-8 py-[14px] text-base font-semibold text-white shadow-lg shadow-green-600/20 hover:bg-green-500 hover:shadow-green-600/30 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:scale-95"
                        >
                            {dict?.ctaStart}
                        </Link>
                        <Link href="/solar" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-700 transition-colors">
                            {dict?.ctaSolar} <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ffdb] to-[#4ade80] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>

        </div>
    )
}
