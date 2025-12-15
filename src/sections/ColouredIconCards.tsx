import ColouredIconCard, {
  type ColouredIconCardProps,
} from "../items/ColouredIconCard";

interface ColouredIconCardsProps {
  title: string;
  items: ColouredIconCardProps[];
}

const ColouredIconCards = ({ title, items }: ColouredIconCardsProps) => {
  return (
    <section className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
      <div className="mt-8 flex flex-col place-items-center gap-5">
        <div className="reveal-up mt-5 flex flex-col gap-3 text-center">
          <h2 className="text-4xl font-medium text-gray-200 max-md:text-2xl">
            {title}
          </h2>
        </div>
        <div className="mt-6 flex max-w-[80%] flex-wrap place-content-center gap-8 max-lg:flex-col">
          {items.map(({ label, body, icon }: ColouredIconCardProps, index) => (
            <ColouredIconCard
              key={index + label}
              icon={icon}
              label={label}
              body={body}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColouredIconCards;
