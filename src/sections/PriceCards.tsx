import PriceCard, { type PriceCardProps } from "../items/PriceCard";

interface PriceCardsProps {
  title: string;
  subTitle: string;
  cards: PriceCardProps[];
}

const PriceCards = ({ title, subTitle, cards }: PriceCardsProps) => {
  return (
    <section
      className="mt-5 flex w-full flex-col place-items-center p-[2%]"
      id="pricing"
    >
      <h3 className="text-3xl font-medium text-gray-300 max-md:text-2xl">
        {title}
      </h3>

      <p className="pt-2">{subTitle}</p>

      <div className="mt-10 flex flex-wrap place-content-center gap-8 max-lg:flex-col">
        {cards.map(({ ...props }: PriceCardProps, index) => (
          <PriceCard key={index + props.price} {...props} />
        ))}
      </div>
    </section>
  );
};

export default PriceCards;
