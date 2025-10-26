const teamMembers = [
    { name: "John Smith", role: "CEO & Founder", image: "/professional-man.jpg" },
    { name: "Sarah Johnson", role: "Design Lead", image: "/professional-woman-diverse.png" },
    { name: "Mike Chen", role: "Tech Lead", image: "/professional-asian-man.png" },
    { name: "Emma Davis", role: "Product Manager", image: "/professional-woman-diverse.png" },
    { name: "Alex Rodriguez", role: "Senior Developer", image: "/professional-man.jpg" },
    { name: "Lisa Anderson", role: "Marketing Director", image: "/professional-woman-diverse.png" },
    { name: "James Wilson", role: "UX Designer", image: "/professional-man.jpg" },
    { name: "Rachel Green", role: "Business Analyst", image: "/professional-woman-diverse.png" },
]

export default function OurTeam() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg overflow-hidden aspect-square mb-3 border border-border group-hover:border-accent/50 transition">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>
                            <h3 className="font-semibold text-sm md:text-base">{member.name}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
