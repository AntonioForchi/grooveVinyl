import { Check } from "lucide-react";

type PricingCardProps = {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  background?: string;
};

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  background = "#181818",
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl w-[80vw] h-fit tablet:w-[60vw] tablet:h-[60vh] laptop:w-full laptop:h-[85vh] laptopM:h-[70vh] surface:h-[60vh] qhd:h-[50vh] ${
        popular
          ? "bg-gradient-to-b from-green-600/20 to-transparent border border-green-600"
          : ""
      }`}
      style={{ background: !popular ? background : undefined }}
    >
      <div className="p-12 text-left rounded-2xl shadow-xl shadow-black/20 gap-4 flex flex-col h-full">
        {popular && (
          <div className="flex items-center justify-center w-fit bg-green-600 rounded-full px-4 py-1">
            <p className="text-black text-sm">Most popular</p>
          </div>
        )}

        <h1 className="text-white text-3xl font-bold">{title}</h1>

        <div className="flex items-end gap-2">
          <h1 className="text-white text-5xl font-bold">{price}</h1>
          {period && <p className="text-gray-500">{period}</p>}
        </div>

        <h2 className="text-gray-500 text-xl font-medium">{description}</h2>

        <div className="mt-5 flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2 items-start">
              <Check className="text-green-600 mt-1" />
              <p className="text-white text-md">{feature}</p>
            </div>
          ))}
        </div>

        <button
          className={`w-full rounded-md p-2 mt-auto ${
            popular
              ? "bg-green-600 text-black hover:bg-green-600/70"
              : "bg-[#282828] text-gray-600 hover:bg-gray-600/20"
          } cursor-pointer`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
