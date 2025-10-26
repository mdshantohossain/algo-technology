"use client"

import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Approach from "@/components/approach"
import TechStack from "@/components/tech-stack"
import Resources from "@/components/resources"
import CTA from "@/components/cta"
import Insights from "@/components/insights";
import OurTeam from "@/components/our-team";
import Portfolio from "@/components/protfolio";
import Pricing from "@/components/pricing";

export default function Home() {


  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <Hero />
      <Services />
      <Insights />
      <OurTeam />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Resources />
      <Approach />
      <TechStack />
      <CTA />

    </div>
  )
}
