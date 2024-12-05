import { ReactElement } from "react";

export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

const PricingCard = ({
  title,
  price,
  features,
  buttonText,
  isPopular,
}: PricingCardProps) : ReactElement => {
  return (
    <div
      className={`p-8 bg-white shadow-lg rounded-lg ${
        isPopular ? "border-4 border-green-600" : "border"
      }`}
    >
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-5xl font-bold text-green-600 mt-4">{price}</p>
      <ul className="text-gray-600 mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 w-full py-3 text-lg font-medium rounded-lg ${
          isPopular
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
