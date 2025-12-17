import React from "react";
import Testimonial, { type TestimonialProps } from "../items/Testimonial";

interface TestimoniesProps {
  title: string;
  testimonials: TestimonialProps[];
}

const Testimonies = ({ title, testimonials }: TestimoniesProps) => {
  return (
    <section className="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%]">
      <h3 className="text-4xl font-medium text-gray-200 max-md:text-2xl">
        {title}
      </h3>
      <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
        {testimonials.map(
          (
            { quote, author, position, profilePic }: TestimonialProps,
            index,
          ) => (
            <Testimonial
              key={index + author}
              quote={quote}
              author={author}
              position={position}
              profilePic={profilePic}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Testimonies;
