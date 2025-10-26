export default function Hero() {
  return (
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Impact the World by Taking Action
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                We help businesses transform their ideas into reality with cutting-edge solutions and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-96">
                <img src="/professional-team-working.png" alt="Team working" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
