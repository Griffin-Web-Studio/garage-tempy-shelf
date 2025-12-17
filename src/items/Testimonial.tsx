export interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  profilePic: string;
}

const Testimonial = ({
  quote,
  author,
  position,
  profilePic,
}: TestimonialProps) => {
  return (
    <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
      <p className="mt-4 text-gray-300">{quote}</p>

      <div className="flex place-items-center gap-3">
        <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
          <img
            src={profilePic}
            className="h-full w-full object-cover"
            alt={author}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold">{author}</div>
          <div className="text-gray-400">{position}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
