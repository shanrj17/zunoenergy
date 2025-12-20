import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & Conditions | ZunoEnergy",
    description: "Plain English terms regarding the use of our educational tools.",
}

export default function TermsPage() {
    return (
        <div className="bg-white py-16 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 sm:text-4xl">Terms & Conditions</h1>

                <div className="prose prose-gray max-w-none text-gray-600 space-y-8 leading-relaxed">
                    <p className="text-lg">
                        By using ZunoEnergy, you agree to the terms below. They are written in plain language to explain how the platform works and its limitations.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">1. Use of the Platform</h2>
                        <p>
                            ZunoEnergy provides informational tools and educational content designed to help homeowners understand energy efficiency. <strong>This is not professional advice.</strong> We are not a utility company, a licensed contractor, or a financial advisor. You should always consult with qualified professionals before making significant home improvements or financial decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">2. Accuracy of Information</h2>
                        <p>
                            Our estimates and recommendations are based on publicly available data, regional averages, and standard building science principles. However, every home is unique. Actual energy usage, savings, and costs will vary depending on your specific location, home construction, local utility rates, and usage habits.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">3. No Guarantees</h2>
                        <p>
                            All results provided by our calculators and guides are for informational purposes only. ZunoEnergy does not guarantee specific savings or financial returns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">4. User Responsibility</h2>
                        <p>
                            Any decisions you make based on information found on this platform are your sole responsibility. ZunoEnergy is not responsible for the outcome of any DIY projects, contractor hirings, or purchases you make.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                        <p>
                            All content, tools, design, and code on ZunoEnergy belong to us. You may use the site for personal, non-commercial purposes. You may not copy, reproduce, or commercially exploit our content without prior written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, ZunoEnergy and its creators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">7. Updates to Terms</h2>
                        <p>
                            We may update these terms periodically to reflect changes in our service or legal requirements. Your continued use of the platform after any changes implies your acceptance of the new terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
