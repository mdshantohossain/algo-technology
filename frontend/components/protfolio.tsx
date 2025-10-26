const portfolioItems = [
    { title: "E-Commerce Platform", image: "/ecommerce-website-homepage.png" },
    { title: "Mobile App Design", image: "/mobile-app-interface.png" },
    { title: "Brand Identity", image: "/abstract-brand-design.png" },
    { title: "Dashboard UI", image: "/general-dashboard-interface.png" },
    { title: "Marketing Campaign", image: "/marketing-design.jpg" },
    { title: "Web Application", image: "/modern-web-application.png" },
]

export default function Portfolio() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Best Folio.</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Explore our latest projects and see how we bring ideas to life with creativity and technical excellence.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end p-4">
                                <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
