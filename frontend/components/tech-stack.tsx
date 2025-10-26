"use client"

const technologies = [
  { name: "React", image: "/react-logo.png" },
  { name: "Next.js", image: "/nextjs-logo.png" },
  { name: "TypeScript", image: "/typescript-logo.png" },
  { name: "Tailwind CSS", image: "/tailwind-css-logo.png" },
  { name: "Node.js", image: "/nodejs-logo.png" },
  { name: "PostgreSQL", image: "/postgresql-logo.png" },
  { name: "Vercel", image: "/vercel-logo.png" },
  { name: "Docker", image: "/docker-logo.png" },
]

export default function TechStack() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <img src={tech.image || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 object-contain" />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
