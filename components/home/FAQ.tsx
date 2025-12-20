import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <section className="py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}>
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="bg-white px-8 rounded-2xl border border-gray-100 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-green-500/10 data-[state=open]:shadow-md transition-all duration-300">
                        <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-green-700 hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-green-600">
                            How accurate is the ZunoEnergy checkup?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2">
                            Our estimates rely on localized U.S. Department of Energy data and current rate averages. We intentionally use conservative models to give you numbers you can trust, not best-case scenarios.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-white px-8 rounded-2xl border border-gray-100 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-green-500/10 data-[state=open]:shadow-md transition-all duration-300">
                        <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-green-700 hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-green-600">
                            Do I need to sign up to see results?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2">
                            <span className="font-semibold text-green-700">No.</span> You can run a full checkup anonymously. We only ask for an email if you want to save your report or get a detailed long-term plan sent to you.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-white px-8 rounded-2xl border border-gray-100 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-green-500/10 data-[state=open]:shadow-md transition-all duration-300">
                        <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-green-700 hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-green-600">
                            Do you sell solar panels or electricity?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2">
                            No. We are an independent educational tool. We don't sell energy or solar hardware. Our incentives are aligned with helping you reduce consumption, not buying more stuff.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-white px-8 rounded-2xl border border-gray-100 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-green-500/10 data-[state=open]:shadow-md transition-all duration-300">
                        <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-green-700 hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-green-600">
                            Does this work for renters?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2">
                            Absolutely. About 60% of our recommendations (like smart plugs, behavioral shifts, and efficient lighting) require no permanent changes and move with you to your next home.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
