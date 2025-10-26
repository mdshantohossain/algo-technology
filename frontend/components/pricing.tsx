import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "2.46",
    features: ["Up to 5 projects", "Basic support", "Community access", "Monthly updates"],
  },
  {
    name: "Standard",
    price: "5.75",
    features: ["Unlimited projects", "Priority support", "Advanced analytics", "Weekly updates", "Custom integrations"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "10.25",
    features: [
      "Everything in Standard",
      "24/7 dedicated support",
      "Custom development",
      "API access",
      "White-label options",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Best Pricing Plan</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Always flexible to scale as you grow.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border transition ${
                plan.highlighted
                  ? "bg-accent text-accent-foreground border-accent scale-105 md:scale-100"
                  : "bg-background border-border hover:border-accent/50"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.highlighted ? "" : "text-muted-foreground"}>/month</span>
              </div>
              <button
                className={`w-full py-2 rounded-lg font-medium mb-8 transition ${
                  plan.highlighted
                    ? "bg-accent-foreground text-accent hover:opacity-90"
                    : "border border-current hover:bg-muted"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
