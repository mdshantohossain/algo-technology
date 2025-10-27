"use client"

import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Testimonials from "@/components/home/testimonials"
import Approach from "@/components/home/approach"
import TechStack from "@/components/home/tech-stack"
import Resources from "@/components/home/resources"
import CTA from "@/components/home/cta"
import Insights from "@/components/home/insights";
import OurTeam from "@/components/home/our-team";
import Portfolio from "@/components/home/protfolio";
import Pricing from "@/components/home/pricing";

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
