"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "The Future of Web Design",
    excerpt: "Exploring emerging trends and technologies shaping web design",
    date: "Mar 15, 2024",
    category: "Design",
    image: "🎨",
  },
  {
    title: "Building Scalable Applications",
    excerpt: "Best practices for architecting applications that grow with your business",
    date: "Mar 10, 2024",
    category: "Development",
    image: "🏗️",
  },
  {
    title: "User Experience Principles",
    excerpt: "Core principles that make digital products intuitive and delightful",
    date: "Mar 5, 2024",
    category: "UX",
    image: "✨",
  },
  {
    title: "Mobile First Strategy",
    excerpt: "Why mobile-first approach is essential for modern web development",
    date: "Feb 28, 2024",
    category: "Strategy",
    image: "📱",
  },
  {
    title: "Mobile First Strategy",
    excerpt: "Why mobile-first approach is essential for modern web development",
    date: "Feb 28, 2024",
    category: "Strategy",
    image: "📱",
  },
  {
    title: "Mobile First Strategy",
    excerpt: "Why mobile-first approach is essential for modern web development",
    date: "Feb 28, 2024",
    category: "Strategy",
    image: "📱",
  },
  {
    title: "Mobile First Strategy",
    excerpt: "Why mobile-first approach is essential for modern web development",
    date: "Feb 28, 2024",
    category: "Strategy",
    image: "📱",
  },
]

export default function Resources() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newPosition = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Resources</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 md:pb-0"
          style={{ scrollBehavior: "smooth" }}
        >
          {resources.map((article, index) => (
              <article
                  key={index}
                  className="flex-shrink-0 w-full sm:w-80 bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-40 flex items-center justify-center text-5xl">
                  {article.image}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{article.excerpt}</p>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                    Read More
                  </button>
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  )
}
