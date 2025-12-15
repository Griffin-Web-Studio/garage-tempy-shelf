import IconText, { type IconTextProps } from "../items/IconText";

interface ImageTextLayoutProps {
  title: string;
  items: IconTextProps[];
  image: string;
  rev?: boolean;
}

const ImageTextLayout = ({
  title,
  items,
  image,
  rev,
}: ImageTextLayoutProps) => {
  return (
    <section className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
      <div
        className={`reveal-up flex ${rev && "flex-row-reverse"} min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10`}
      >
        <div className="flex">
          <div className="max-h-162.5 max-w-212.5 overflow-hidden rounded-lg shadow-lg shadow-[rgba(170,49,233,0.44021358543417366)]">
            <img
              src={image}
              alt="coding"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex max-w-112.5 flex-col gap-4">
          <h3 className="text-4xl font-medium max-md:text-2xl">{title}</h3>

          {items.map(({ icon, label, body }: IconTextProps, index) => (
            <IconText
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

export default ImageTextLayout;
