import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
  RESPONSIVE_WIDTH: number;
}

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ RESPONSIVE_WIDTH }: HeroProps) => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const dashboardRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(dashboardRef.current, {
      boxShadow: "0px 15px 25px -5px #7e22ceaa",
      duration: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "60% 60%",
        end: "80% 80%",
        // markers: true
      },
    });

    // straightens the slanting image
    gsap.to(dashboardRef.current, {
      scale: 1,
      translateY: 0,
      // translateY: "0%",
      rotateX: "0deg",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
  });

  return (
    <section
      className="hero-section relative flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden max-md:mt-12.5"
      id="hero-section"
      ref={sectionRef}
    >
      <div className="flex h-full min-h-screen w-full flex-col place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:p-4">
        <div className="flex flex-col place-content-center items-center">
          <div className="reveal-up flex items-baseline gap-5 white-text text-center text-6xl font-semibold leading-20 max-lg:text-4xl max-md:leading-snug">
            <span className="italic capitalize font-thin font-fancy text-9xl">
              the
            </span>{" "}
            <img
              src="/assets/logo/logo-white.png"
              alt="InvoiceShelf"
              className="logo object w-80"
            />
            {/* <br />
              <span className=""> Made simple </span> */}
          </div>
          <div className="reveal-up mt-10 max-w-112.5 p-2 text-center text-gray-300 max-lg:max-w-full">
            InvoiceShelf is an open-source web & mobile app that helps you track
            expenses, payments & create professional invoices & estimates. The
            Web Application is made using Laravel & VueJS while the Mobile Apps
            are built using React Native.
          </div>

          <div className="reveal-up mt-10 flex place-items-center gap-4">
            <a
              className="btn shadow-lg shadow-primary transition-transform duration-300 hover:scale-x-[1.03]"
              href="https://github.com/InvoiceShelf/InvoiceShelf/releases/download/2.1.1/InvoiceShelf.zip"
            >
              Download Latest
              {/* Get started */}
            </a>
            <a
              className="btn flex gap-2 bg-black! text-white! transition-colors duration-300 hover:bg-white! hover:text-black!"
              href="https://github.com/InvoiceShelf/InvoiceShelf/releases/tag/2.1.1"
            >
              <i className="bi bi-archive-fill"></i>
              <span>Github Release 2.1.1</span>
              {/* <span>Learn more</span> */}
            </a>
          </div>
        </div>

        <div
          className="reveal-up relative mt-8 flex w-full place-content-center place-items-center"
          id="dashboard-container"
        >
          <div
            className="relative max-w-[80%] overflow-hidden rounded-xl bg-transparent max-md:max-w-full"
            id="dashboard"
            ref={dashboardRef}
          >
            <img
              src="/assets/images/home/dash.png"
              alt="dashboard"
              className="h-full w-full object-cover opacity-90 max-lg:object-contain"
            />
          </div>

          <div className="hero-img-bg-grad absolute left-[20%] top-5 h-50 w-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
