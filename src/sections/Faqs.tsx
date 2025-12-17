import Faq, { type FaqProps } from "../components/Faq";

interface FaqsProps {
  title: string;
  ctaTitle: string;
  ctaLabel: string;
  ctaUrl: string;
  faqs: FaqProps[];
}

const Faqs = ({ title, ctaTitle, ctaLabel, ctaUrl, faqs }: FaqsProps) => {
  return (
    <section className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%]">
      <h3 className="text-4xl font-medium text-gray-300 max-md:text-2xl">
        {title}
      </h3>
      <div className="mt-5 flex min-h-75 w-full max-w-212.5 flex-col gap-4">
        {faqs.map(({ label, text }: FaqProps, index) => (
          <Faq key={index + label} label={label} text={text} />
        ))}
      </div>

      <div className="mt-20 flex flex-col place-items-center gap-4">
        <div className="text-3xl max-md:text-2xl">{ctaTitle}</div>
        <a
          href={ctaUrl}
          className="btn rounded-full! border! border-solid! border-gray-300! bg-transparent! transition-colors duration-300"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
};

export default Faqs;
