export interface PriceCardProps {
  price: string;
  cycleDuration: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaUrl: string;
  eyeSnag?: boolean;
}

const PriceCard = ({
  price,
  cycleDuration,
  description,
  items,
  ctaLabel,
  ctaUrl,
  eyeSnag,
}: PriceCardProps) => {
  return (
    <div
      className={`reveal-up flex w-95 flex-col rounded-lg border ${eyeSnag ? "border-2 border-primary" : "border-outlineColor"} bg-secondary p-8 shadow-xl max-lg:w-[320px]`}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col place-items-center gap-2">
          <h3 className="">
            <span className="text-5xl font-semibold">{price}</span>

            <span className="text-2xl text-gray-400">/{cycleDuration}</span>
          </h3>

          <p className="mt-3 text-center text-gray-300">{description}</p>

          <hr />

          <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
            {items.map((item, index) => (
              <li key={index + item}>{item}</li>
            ))}
          </ul>
        </div>

        <a
          href={ctaUrl}
          className="btn mt-8 w-full! transition-transform duration-300 hover:scale-x-[1.02]"
          title={ctaLabel}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
