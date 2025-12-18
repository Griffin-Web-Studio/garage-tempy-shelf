interface NewsletterProps {
  title: string;
  subHeading: string;
  formAction: string;
  ctaLabel: string;
}

const Newsletter = ({
  title,
  subHeading,
  formAction,
  ctaLabel,
}: NewsletterProps) => {
  return (
    <section className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%] max-md:px-2">
      <div className="flex w-full max-w-[80%] place-content-center place-items-center justify-between gap-3 rounded-lg border border-outlineColor bg-secondary p-6 max-md:max-w-full max-md:flex-col">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl text-gray-300 max-md:text-xl">{title}</h2>
          <div className="text-gray-300">{subHeading}</div>
        </div>

        <form
          action={formAction}
          method="post"
          className="flex h-15 place-items-center gap-2 overflow-hidden p-2"
        >
          <input
            type="email"
            className="input h-full w-full border-gray-600! p-2 outline-none"
            placeholder="email"
          />
          <button
            type="submit"
            className="btn !rounded-full! border! border-solid! border-gray-300! bg-transparent! transition-colors duration-300"
          >
            {ctaLabel}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
