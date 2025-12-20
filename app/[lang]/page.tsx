import { getDictionary } from "@/lib/dictionary"
import { Hero } from "@/components/home/Hero"
import { TrustSignal } from "@/components/home/TrustSignal"
import { ComparisonSection } from "@/components/home/ComparisonSection"
import { HowItWorks } from "@/components/home/HowItWorks"
import { StateSavings } from "@/components/home/StateSavings"
import { FeaturesList } from "@/components/home/FeaturesList"
import { EcoStory } from "@/components/home/EcoStory"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"
import { ClosingSlogan } from "@/components/home/ClosingSlogan"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as "en" | "es")

  return (
    <div className="flex flex-col min-h-screen">
      <Hero dict={dict.home} />
      <TrustSignal />
      <ComparisonSection />
      <HowItWorks />
      <StateSavings />
      <FeaturesList />
      <EcoStory />
      <FAQ />
      <FinalCTA />
      <ClosingSlogan />
    </div>
  )
}
