export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$29.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_0PPzWNqs14Mpveu1MG99LqQt",
    stripe_product_id: "prod_QGWZGK4QLJh7iZ",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Premium",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$59.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_0PPzWNqs14Mpveu1MG99LqQt",
    stripe_product_id: "prod_QGWZGK4QLJh7iZ",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
