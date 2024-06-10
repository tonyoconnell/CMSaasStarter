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
    price: "$100",
    priceIntervalName: "per month",
    stripe_price_id: "price_0MC5WIqs14Mpveu1bfwvrkq6",
    stripe_product_id: "prod_MvxRof9FIQWQFU",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$5000",
    priceIntervalName: "per year",
    stripe_price_id: "price_0PJXurqs14Mpveu1rfjxjPL0",
    stripe_product_id: "prod_Q9reur2IRyRzRp",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
