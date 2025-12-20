import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | ZunoEnergy",
    description: "Our commitment to protecting your privacy. Clear, honest, and transparent.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white py-16 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 sm:text-4xl">Privacy Policy</h1>

                <div className="prose prose-gray max-w-none text-gray-600 space-y-8 leading-relaxed">
                    <p className="text-lg">
                        ZunoEnergy respects your privacy. This page explains what information is collected, how it is used, and how it is protected.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Usage Data:</strong> We may collect basic, non-identifying information about how you interact with our website to improve usability (e.g., pages visited, time spent).</li>
                            <li><strong>Voluntary Information:</strong> If you choose to contact us or provide feedback, we collect the information you explicitly provide, such as your email address and message content.</li>
                            <li><strong>No Accounts:</strong> You do not need to create an account or login to use our calculators or educational guides.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
                        <p>We use the limited information we collect solely for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>To improve the functionality and content of the platform.</li>
                            <li>To respond to your inquiries or feedback if you have requested a reply.</li>
                            <li>To maintain the security and stability of our website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">3. What We Do NOT Do</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We <strong>do not</strong> sell, rent, or trade your personal data to third parties.</li>
                            <li>We <strong>do not</strong> build advertising profiles or target you with behavioral ads.</li>
                            <li>We <strong>do not</strong> send marketing emails or newsletters unless you have explicitly opted in (we currently do not have a newsletter).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookies & Analytics</h2>
                        <p>
                            We use <strong>Google Analytics 4 (GA4)</strong> to understand website traffic and usage patterns (e.g., preventing errors, improving page speed). This data is collected in an aggregated, anonymized format.
                        </p>
                        <p className="mt-2">
                            We have configured these tools to <strong>respect your privacy</strong>:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>IP anonymization is enabled.</li>
                            <li>Advertising features and cross-site tracking are disabled.</li>
                            <li>We do not share this data with third-party ad networks.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                        <p>
                            We implement reasonable technical safeguards to protect your information. We do not store sensitive financial data or payment methods on our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your Choices</h2>
                        <p>
                            You are not required to provide any personal information to use ZunoEnergy. If you have questions about privacy or wish to request the deletion of any data you may have sent us, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact</h2>
                        <p>
                            For privacy-related questions, please use our <a href="/contact" className="text-green-600 hover:text-green-700 font-medium underline">Contact & Feedback</a> page.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
