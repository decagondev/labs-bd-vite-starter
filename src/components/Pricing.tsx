import PricingCard,  {PricingCardProps} from "./PricingCard";

const Pricing = () => {
  const plans: PricingCardProps[] = [
    {
      title: "Basic",
      price: "$49",
      features: [
        "Access to all course materials",
        "Weekly Q&A sessions",
        "Email support",
      ],
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      title: "Standard",
      price: "$99",
      features: [
        "Everything in Basic",
        "Live group sessions",
        "Certificate of completion",
      ],
      buttonText: "Most Popular",
      isPopular: true,
    },
    {
      title: "Premium",
      price: "$199",
      features: [
        "Everything in Standard",
        "1:1 mentorship sessions",
        "Lifetime access to updates",
      ],
      buttonText: "Join Now",
      isPopular: false,
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="price">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Flexible Pricing Plans
        </h2>
        <p className="text-gray-600 mt-4">
          Choose the plan that's right for you and start your journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
