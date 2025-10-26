export default function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to start your next project?</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's work together to create something amazing. Get in touch with our team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition">
            Start Your Project
          </button>
          <button className="px-8 py-3 border-2 border-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}
