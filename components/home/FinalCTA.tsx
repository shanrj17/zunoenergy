import Link from "next/link"

export function FinalCTA() {
    return (
        <section className="py-32 bg-green-900 text-center relative overflow-hidden isolate">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-950 -z-20" />

            {/* Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 drop-shadow-xl">
                    Stop Guessing. Start Saving.
                </h2>
                <p className="mx-auto max-w-2xl text-xl leading-8 text-green-100 mb-12 font-light">
                    Join thousands of homeowners who are taking control of their bills.
                    <br className="hidden sm:block" />
                    <span className="font-medium text-white">No sign-up required. No phone calls. Just results.</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/calculator"
                        className="inline-block rounded-full bg-white px-12 py-5 text-xl font-bold text-green-900 shadow-2xl shadow-green-900/40 hover:bg-green-50 hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Start My Free Energy Checkup
                    </Link>
                </div>
                <p className="mt-8 text-sm text-green-400/80">
                    Takes less than 60 seconds • 100% Free & Private
                </p>
            </div>
        </section>
    )
}
