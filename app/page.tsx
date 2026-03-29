import { HeroSection } from "@/components/sections/hero"
import { ValueProposition } from "@/components/sections/value-proposition"
import { ConversionStory } from "@/components/sections/conversion-story"
import { CommonProblems } from "@/components/sections/common-problems"
import { ConversionProblems } from "@/components/sections/conversion-problems"
import { WhatIDo } from "@/components/sections/what-i-do"
import { BeforeAfter } from "@/components/sections/before-after"
import { Results } from "@/components/sections/results"
import { Trust } from "@/components/sections/trust"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { FloatingCTA } from "@/components/sections/floating-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <ConversionStory />
      <CommonProblems />
      <ConversionProblems />
      <WhatIDo />
      <BeforeAfter />
      <Results />
      <Trust />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
