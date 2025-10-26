export default function Insights() {
    const stats = [
        { number: "27", label: "Projects Completed" },
        { number: "18", label: "Team Members" },
        { number: "56", label: "Happy Clients" },
        { number: "13", label: "Years Experience" },
    ]

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Insights About Our Company</h2>
                        <p className="text-muted-foreground text-lg">
                            With over a decade of experience, we've helped hundreds of businesses achieve their goals through
                            innovative solutions and dedicated support.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</div>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-96">
                            <img src="/team-collaboration.png" alt="Team collaboration" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
