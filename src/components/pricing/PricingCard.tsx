"use client";

import { Button } from "@/components/ui/button"; // adjust path if needed

const PricingCard = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$20",
      features: [
        "10 users included",
        "2GB storage",
        "Email support",
        "Help center access",
      ],
      highlight: false,
    },
    {
      title: "Pro",
      price: "$30",
      features: [
        "20 users included",
        "5GB storage",
        "Email support",
        "Help center access",
        "Phone support",
        "Community access",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "$50",
      features: [
        "50 users included",
        "15GB storage",
        "Priority support",
        "Dedicated account manager",
        "Email support",
        "Help center access",
        "Phone support",
        "Community access",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="pb-32">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`space-y-6 rounded-lg border p-8 transition-transform transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col ${
                  plan.highlight
                    ? "border-primary ring-1 ring-indigo-600 shadow-lg"
                    : "border-border"
                }`}
              >
                <div className="grow-1 space-y-2">
                  <div className="text-center space-y-2 p-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {plan.title}
                    </h3>
                    <p className="text-3xl font-bold sm:text-4xl">
                      {plan.price}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="rounded-full w-full p-4 my-4">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
