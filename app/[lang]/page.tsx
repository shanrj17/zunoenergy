import { getDictionary } from "@/lib/dictionary"
import { InteractiveHero } from "@/components/home/InteractiveHero"
import { TrustSignal } from "@/components/home/TrustSignal"
import { ComparisonSection } from "@/components/home/ComparisonSection"
import { HowItWorks } from "@/components/home/HowItWorks"
import { StateSavings } from "@/components/home/StateSavings"
import { FeaturesList } from "@/components/home/FeaturesList"
import { EcoStory } from "@/components/home/EcoStory"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"
import { ClosingSlogan } from "@/components/home/ClosingSlogan"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return {
    alternates: {
      canonical: `/${lang}`,
    },
  }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as "en" | "es")

  return (
    <div className="flex flex-col min-h-screen">
      <InteractiveHero />
      <TrustSignal />
      <ComparisonSection />
      <HowItWorks />
      <StateSavings />
      <FeaturesList />
      <EcoStory />
      <FAQ />
      <FinalCTA />
      <ClosingSlogan />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate is the ZunoEnergy checkup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our estimates rely on localized U.S. Department of Energy data and current rate averages. We intentionally use conservative models to give you numbers you can trust, not best-case scenarios."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to sign up to see results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. You can run a full checkup anonymously. We only ask for an email if you want to save your report or get a detailed long-term plan sent to you."
                }
              },
              {
                "@type": "Question",
                "name": "Do you sell solar panels or electricity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We are an independent educational tool. We don't sell energy or solar hardware. Our incentives are aligned with helping you reduce consumption, not buying more stuff."
                }
              },
              {
                "@type": "Question",
                "name": "Does this work for renters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. About 60% of our recommendations (like smart plugs, behavioral shifts, and efficient lighting) require no permanent changes and move with you to your next home."
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
