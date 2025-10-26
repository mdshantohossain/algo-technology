"use client"

import { Zap, Palette, Code, Rocket } from "lucide-react"
const features = [
  {
    icon: Zap,
    title: "Business Strategy",
    description: "Strategic planning and execution to drive your business forward with proven methodologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive designs that engage users and drive conversions.",
  },
  {
    icon: Code,
    title: "App Development",
    description: "Robust and scalable applications built with the latest technologies.",
  },
  {
    icon: Zap,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to reach and engage your target audience.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Create a strong brand identity that resonates with your customers.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, secure, and SEO-optimized websites that convert visitors into customers.",
  },
]

export default function Services() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Services we offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                  <div
                      key={index}
                      className="bg-background rounded-xl p-6 md:p-8 border border-border hover:border-accent/50 transition"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
