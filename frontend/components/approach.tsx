import { Lightbulb, Users, Zap, Target, Palette, CheckCircle } from "lucide-react"

const approaches = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We start by understanding your goals and vision",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with your team throughout",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful and functional designs",
  },
  {
    icon: Zap,
    title: "Development",
    description: "Building with modern technologies",
  },
  {
    icon: Target,
    title: "Testing",
    description: "Rigorous quality assurance and testing",
  },
  {
    icon: CheckCircle,
    title: "Launch",
    description: "Smooth deployment and ongoing support",
  },
]

export default function Approach() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our design and development approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A proven methodology that delivers results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{approach.title}</h3>
                <p className="text-muted-foreground text-sm">{approach.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
