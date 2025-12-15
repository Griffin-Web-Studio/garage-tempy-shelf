import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faq from "./components/Faq";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const repo_url = "https://github.com/InvoiceShelf/InvoiceShelf";
  const RESPONSIVE_WIDTH = 1024;

  const gsapContainer = React.useRef<HTMLDivElement>(null);
  const heroSection = React.useRef<HTMLElement>(null);
  const dashboard = React.useRef<HTMLDivElement>(null);
  const collapsedHeaderItems = React.useRef<HTMLDivElement>(null);
  const collapseButton = React.useRef<HTMLButtonElement>(null);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = React.useState<boolean>(
    window.innerWidth < RESPONSIVE_WIDTH,
  );

  const toggleHeader = () => {
    const collapseHeaderItems = collapsedHeaderItems.current;
    const collapseBtn = collapseButton.current;

    if (!collapseHeaderItems) return;
    if (!collapseBtn) return;

    if (isHeaderCollapsed) {
      // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
      collapseHeaderItems.classList.add("opacity-100");
      collapseHeaderItems.style.width = "60vw";
      collapseBtn.classList.remove("bi-list");
      collapseBtn.classList.add("bi-x", "max-lg:tw-fixed");
      setIsHeaderCollapsed(false);

      setTimeout(
        () => globalThis.addEventListener("click", onHeaderClickOutside),
        1,
      );
    } else {
      collapseHeaderItems.classList.remove("opacity-100");
      collapseHeaderItems.style.width = "0vw";
      collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed");
      collapseBtn.classList.add("bi-list");
      setIsHeaderCollapsed(true);
      globalThis.removeEventListener("click", onHeaderClickOutside);
    }
  };

  const onHeaderClickOutside = (e: MouseEvent) => {
    const collapseHeaderItems = collapsedHeaderItems.current;

    if (!collapseHeaderItems) return;

    if (!collapseHeaderItems.contains(e.currentTarget as Node)) {
      toggleHeader();
    }
  };

  useGSAP(
    () => {
      gsap.to(".reveal-up", {
        opacity: 0,
        y: "100%",
      });

      gsap.to(dashboard.current, {
        boxShadow: "0px 15px 25px -5px #7e22ceaa",
        duration: 0.3,
        scrollTrigger: {
          trigger: heroSection.current,
          start: "60% 60%",
          end: "80% 80%",
          // markers: true
        },
      });

      // straightens the slanting image
      gsap.to(dashboard.current, {
        scale: 1,
        translateY: 0,
        // translateY: "0%",
        rotateX: "0deg",
        scrollTrigger: {
          trigger: heroSection.current,
          start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
          end: "bottom bottom",
          scrub: 1,
          // markers: true,
        },
      });

      const sections = gsap.utils.toArray<HTMLElement>("section");

      sections.forEach((sec) => {
        const revealUptimeLine = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: sec,
            start: "10% 80%", // top of trigger hits the top of viewport
            end: "20% 90%",
            // markers: true,
            // scrub: 1,
          },
        });

        revealUptimeLine.to(sec.querySelectorAll(".reveal-up"), {
          opacity: 1,
          duration: 0.8,
          y: "0%",
          stagger: 0.2,
        });
      });
    },
    { scope: gsapContainer },
  );

  React.useEffect(() => {
    function responsive() {
      const collapseHeaderItems = collapsedHeaderItems.current;

      if (!collapseHeaderItems) return;

      if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = "";
      } else {
        setIsHeaderCollapsed(true);
      }
    }

    window.addEventListener("resize", responsive);

    return () => {
      window.removeEventListener("resize", responsive);
    };
  }, [collapsedHeaderItems, setIsHeaderCollapsed]);

  return (
    <div ref={gsapContainer}>
      <header className="max-w-lg:px-4 max-w-lg:mr-auto absolute top-0 z-20 flex h-15 w-full bg-opacity-0 px-[5%] lg:justify-around">
        <div className="h-12.5 w-45 p-1 flex items-center">
          <a className="block" href={repo_url}>
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              className="logo object w-full"
            />
          </a>
        </div>
        <div
          className="collapsible-header animated-collapse max-lg:shadow-md"
          id="collapsed-header-items"
          ref={collapsedHeaderItems}
        >
          <div className="flex h-full w-max gap-5 text-base max-lg:mt-7.5 max-lg:flex-col max-lg:place-items-end max-lg:gap-5 lg:mx-auto lg:place-items-center">
            <a className="header-links" href="#about-us">
              {" "}
              About us{" "}
            </a>
            <a className="header-links" href="#pricing">
              {" "}
              Pricing{" "}
            </a>
            <a className="header-links" href="#solutions">
              {" "}
              Solutions{" "}
            </a>
            <a className="header-links" href="#features">
              {" "}
              Features{" "}
            </a>
            <a className="header-links" href="#company">
              {" "}
              Company{" "}
            </a>
          </div>
          <div className="mx-4 flex place-items-center gap-5 text-base max-md:w-full max-md:flex-col max-md:place-content-center">
            <a
              href={repo_url}
              aria-label="signup"
              className="rounded-full bg-white px-3 py-2 text-black transition-transform duration-300 hover:translate-x-2"
            >
              <span>Get started</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <button
          className="bi bi-list absolute right-3 top-3 z-50 text-3xl text-white lg:hidden"
          onClick={toggleHeader}
          aria-label="menu"
          id="collapse-btn"
          ref={collapseButton}
        ></button>
      </header>

      <section
        className="hero-section relative flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden max-md:mt-12.5"
        id="hero-section"
        ref={heroSection}
      >
        <div className="flex h-full min-h-screen w-full flex-col place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:p-4">
          <div className="flex flex-col place-content-center items-center">
            <div className="reveal-up gradient-text text-center text-6xl font-semibold uppercase leading-20 max-lg:text-4xl max-md:leading-snug">
              <span className=""> InvoiceShelf </span>
              {/* <br />
              <span className=""> Made simple </span> */}
            </div>
            <div className="reveal-up mt-10 max-w-112.5 p-2 text-center text-gray-300 max-lg:max-w-full">
              InvoiceShelf is an open-source web & mobile app that helps you
              track expenses, payments & create professional invoices &
              estimates. The Web Application is made using Laravel & VueJS while
              the Mobile Apps are built using React Native.
            </div>

            <div className="reveal-up mt-10 flex place-items-center gap-4">
              <a
                className="btn bg-[#7e22ce85] shadow-lg shadow-primary transition-transform duration-300 hover:scale-x-[1.03]"
                href={repo_url}
              >
                Get started
              </a>
              {/* <a className="btn flex gap-2 !bg-black !text-white transition-colors duration-300 hover:!bg-white hover:!text-black"
                href="">
                <i className="bi bi-play-circle-fill"></i>
                <span>Learn more</span>
              </a> */}
            </div>
          </div>

          <div
            className="reveal-up relative mt-8 flex w-full place-content-center place-items-center"
            id="dashboard-container"
          >
            <div
              className="relative max-w-[80%] overflow-hidden rounded-xl bg-transparent max-md:max-w-full"
              id="dashboard"
              ref={dashboard}
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

      {/* <section
        className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-8">
        <h2 className="reveal-up text-3xl max-md:text-xl">
          Trusted by brands you know
        </h2>

        <div className="reveal-up carousel-container">
          <div className="carousel lg:w-place-content-center mt-6 flex w-full gap-5 max-md:gap-2">
            {/* add the brands using your app }
            <div className="carousel-img h-[30px] w-[150px]">
              <img src="/assets/images/brand-logos/google.svg" alt="Google"
                className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
              />
            </div>
            <div className="carousel-img h-[30px] w-[150px]">
              <img src="/assets/images/brand-logos/microsoft.svg" alt="Microsoft"
                className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
              />
            </div>
            <div className="carousel-img h-[30px] w-[150px]">
              <img src="/assets/images/brand-logos/adobe.svg" alt="Adobe"
                className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
              />
            </div>
            <div className="carousel-img h-[30px] w-[150px]">
              <img src="/assets/images/brand-logos/airbnb.svg" alt="Adobe"
                className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
              />
            </div>
            <div className="carousel-img h-[30px] w-[150px]">
              <img src="/assets/images/brand-logos/stripe.svg" alt="Adobe"
                className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
              />
            </div>
            <div className="carousel-img h-[30px] w-[150px]">
              <img src="/assets/images/brand-logos/reddit.svg" alt="Adobe"
                className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div className="mt-8 flex flex-col place-items-center gap-5">
          <div className="reveal-up mt-5 flex flex-col gap-3 text-center">
            <h2 className="text-4xl font-medium text-gray-200 max-md:text-3xl">
              Key benefits
            </h2>
          </div>
          <div className="mt-6 flex max-w-[80%] flex-wrap place-content-center gap-8 max-lg:flex-col">
            <div className="reveal-up flex h-100 w-112.5 flex-col gap-3 text-center max-md:w-[320px]">
              <div className="border-gradient h-50 w-full overflow-hidden max-md:h-37.5">
                <div className="flex h-full w-full place-content-center place-items-end p-2">
                  <i className="bi bi-rocket-takeoff-fill text-7xl text-gray-200 max-md:text-5xl"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <h3 className="mt-8 text-2xl font-normal max-md:text-xl">
                  Benefit X
                </h3>
                <div className="text-gray-300">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
            <div className="reveal-up flex h-100 w-112.5 flex-col gap-3 text-center max-md:w-[320px]">
              <div className="border-gradient h-50 w-full overflow-hidden max-md:text-[150px]">
                <div className="flex h-full w-full place-content-center place-items-end p-2">
                  <i className="bi bi-layout-sidebar-inset text-7xl text-gray-200 max-md:text-5xl"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <h3 className="mt-8 text-2xl font-normal max-md:text-xl">
                  Benefit Y
                </h3>
                <div className="text-gray-300">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
            <div className="reveal-up flex h-100 w-112.5 flex-col gap-3 text-center max-md:w-[320px]">
              <div className="border-gradient h-50 w-full overflow-hidden max-md:h-37.5">
                <div className="flex h-full w-full place-content-center place-items-end p-2">
                  <i className="bi bi-lightning-charge-fill text-7xl text-gray-200 max-md:text-5xl"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <h3 className="mt-8 text-2xl font-normal max-md:text-xl">
                  Benefit Z
                </h3>
                <div className="text-gray-300">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div className="mt-8 flex flex-col place-items-center gap-5">
          <div className="reveal-up mt-5 flex flex-col gap-3 text-center">
            <h2 className="text-4xl font-medium text-gray-200 max-md:text-2xl">
              Features loved by everyone
            </h2>
          </div>
          <div className="mt-6 flex max-w-[80%] flex-wrap place-content-center gap-8 max-lg:flex-col">
            <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div className="text-4xl max-md:text-2xl">
                <i className="bi bi-globe"></i>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl max-md:text-xl">Feature A</h3>
                <p className="text-gray-300 max-md:text-sm">
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div className="text-4xl max-md:text-2xl">
                <i className="bi bi-bar-chart-fill"></i>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl max-md:text-xl">Feature B</h3>
                <p className="text-gray-300 max-md:text-sm">
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div className="text-4xl max-md:text-2xl">
                <i className="bi bi-cloud-fill"></i>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl max-md:text-xl">Feature C</h3>
                <p className="text-gray-300 max-md:text-sm">
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div className="text-4xl max-md:text-2xl">
                <i className="bi bi-fingerprint"></i>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl max-md:text-xl">Feature D</h3>
                <p className="text-gray-300 max-md:text-sm">
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div className="text-4xl max-md:text-2xl">
                <i className="bi bi-sliders"></i>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl max-md:text-xl">Feature E</h3>
                <p className="text-gray-300 max-md:text-sm">
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div className="text-4xl max-md:text-2xl">
                <i className="bi bi-gear-fill"></i>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl max-md:text-xl">Feature F</h3>
                <p className="text-sm text-gray-300">
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div className="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div className="flex">
            <div className="max-h-162.5 max-w-212.5 overflow-hidden rounded-lg shadow-lg shadow-[rgba(170,49,233,0.44021358543417366)]">
              <img
                src="/assets/images/home/dash.png"
                alt="coding"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-6 flex max-w-112.5 flex-col gap-4">
            <h3 className="text-4xl font-medium max-md:text-2xl">
              Simple to use plugins
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-xl font-medium">
                <i className="bi bi-check-all text-2xl!"></i> Plug the ins
              </h4>
              <span className="text-lg text-gray-300 max-md:text-base">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog.
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-xl font-medium">
                <i className="bi bi-check-all text-2xl!"></i> Ins the plug
              </h4>
              <span className="text-lg text-gray-300 max-md:text-base">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div className="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div className="mt-6 flex max-w-112.5 flex-col gap-4">
            <h3 className="text-4xl font-medium max-md:text-2xl">
              Powerful Insights
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-xl font-medium">
                <i className="bi bi-check-all text-2xl!"></i> Easy to use
              </h4>
              <span className="text-lg text-gray-300 max-md:text-base">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog.
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-xl font-medium">
                <i className="bi bi-check-all text-2xl!"></i> All in one panel
              </h4>
              <span className="text-lg text-gray-300 max-md:text-base">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog.
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="max-h-162.5 max-w-212.5 overflow-hidden rounded-lg shadow-lg shadow-[rgba(170,49,233,0.44021358543417366)]">
              <img
                src="/assets/images/home/dash.png"
                alt="coding"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%]">
        <h3 className="text-4xl font-medium text-gray-200 max-md:text-2xl">
          You're in good hands
        </h3>
        {/* Testimonials */}
        <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
          <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p className="mt-4 text-gray-300">
              The quick brown fox jumps over the lazy dog.
            </p>

            <div className="flex place-items-center gap-3">
              <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
                <img
                  src="/assets/images/home/dash.png"
                  className="h-full w-full object-cover"
                  alt="women"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">The who A?</div>
                <div className="text-gray-400">Does what where???</div>
              </div>
            </div>
          </div>
          <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p className="mt-4 text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog. The quick brown fox jumps over the lazy dog.
            </p>

            <div className="flex place-items-center gap-3">
              <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
                <img
                  src="/assets/images/home/dash.png"
                  className="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">The who B?</div>
                <div className="text-gray-400">Does what where???</div>
              </div>
            </div>
          </div>
          <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p className="mt-4 text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </p>

            <div className="flex place-items-center gap-3">
              <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
                <img
                  src="/assets/images/home/dash.png"
                  className="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">The who C?</div>
                <div className="text-gray-400">Does what where???</div>
              </div>
            </div>
          </div>
          <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p className="mt-4 text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </p>

            <div className="flex place-items-center gap-3">
              <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
                <img
                  src="/assets/images/home/dash.png"
                  className="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">The who D?</div>
                <div className="text-gray-400">Does what where???</div>
              </div>
            </div>
          </div>
          <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p className="mt-4 text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </p>

            <div className="flex place-items-center gap-3">
              <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
                <img
                  src="/assets/images/home/dash.png"
                  className="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">The who E?</div>
                <div className="text-gray-400">Does what where???</div>
              </div>
            </div>
          </div>
          <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p className="mt-4 text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </p>

            <div className="flex place-items-center gap-3">
              <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
                <img
                  src="/assets/images/home/dash.png"
                  className="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">The who F?</div>
                <div className="text-gray-400">Does what where???</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-5 flex w-full flex-col place-items-center p-[2%]"
        id="pricing"
      >
        <h3 className="text-3xl font-medium text-gray-300 max-md:text-2xl">
          Simple pricing
        </h3>
        <p className="pt-2">
          We don't really know why this section exist ether 🤷
        </p>
        {/* pricing */}
        <div className="mt-10 flex flex-wrap place-content-center gap-8 max-lg:flex-col">
          <div className="reveal-up flex w-95 flex-col place-items-center gap-2 rounded-lg border border-outlineColor bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h3 className="">
              <span className="text-5xl font-semibold">$0</span>
              <span className="text-2xl text-gray-400">/mo</span>
            </h3>
            <p className="mt-3 text-center text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </p>
            <hr />
            <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
            </ul>
            <a
              href="http://"
              className="btn mt-8 w-full! transition-transform duration-300 hover:scale-x-[1.02]"
            >
              Get now
            </a>
          </div>
          <div className="reveal-up flex w-95 flex-col place-items-center gap-2 rounded-lg border-2 border-primary bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h3 className="">
              <span className="text-5xl font-semibold">$00</span>
              <span className="text-2xl text-gray-400">/mo</span>
            </h3>
            <p className="mt-3 text-center text-gray-300">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </p>
            <hr />
            <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
            </ul>
            <a
              href="http://"
              className="btn mt-8 w-full! transition-transform duration-300 hover:scale-x-[1.02]"
            >
              Get now
            </a>
          </div>
          <div className="reveal-up flex w-95 flex-col place-items-center gap-2 rounded-lg border border-outlineColor bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h3 className="">
              <span className="text-5xl font-semibold">$000</span>
              <span className="text-2xl text-gray-400">/mo</span>
            </h3>
            <p className="mt-3 text-center text-gray-300">
              The quick brown fox jumps over the lazy dog.
            </p>
            <hr />
            <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
            </ul>
            <a
              href="http://"
              className="btn mt-8 w-full! transition-transform duration-300 hover:scale-x-[1.02]"
            >
              Get now
            </a>
          </div>
        </div>
      </section>

      <section className="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%] max-lg:p-3">
        <h3 className="reveal-up text-center text-4xl font-medium max-md:text-2xl">
          Read our articles ✨
        </h3>
        {/* articles */}
        <div className="reveal-up mt-10 flex flex-wrap place-content-center gap-10 max-lg:flex-col">
          <a
            href={repo_url}
            className="flex h-100 w-100 flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-75"
          >
            <div className="h-62.5 w-full overflow-hidden rounded-md">
              <img
                src="/assets/images/home/dash.png"
                alt="article"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 1
            </h3>
            <p className="text-gray-400">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </p>
            <span>
              <span>Learn more</span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </a>
          <a
            href={repo_url}
            className="flex h-100 w-100 flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-75"
          >
            <div className="h-62.5 w-full overflow-hidden rounded-md">
              <img
                src="/assets/images/home/dash.png"
                alt="article"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 2
            </h3>
            <p className="text-gray-400">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </p>
            <span>
              <span>Learn more</span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </a>
          <a
            href={repo_url}
            className="flex h-100 w-100 flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-75"
          >
            <div className="h-62.5 w-full overflow-hidden rounded-md">
              <img
                src="/assets/images/home/dash.png"
                alt="article"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 3
            </h3>
            <p className="text-gray-400">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </p>
            <span>
              <span>Learn more</span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </a>
        </div>
      </section>

      <section className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%]">
        <h3 className="text-4xl font-medium text-gray-300 max-md:text-2xl">
          Faq
        </h3>
        <div className="mt-5 flex min-h-75 w-full max-w-212.5 flex-col gap-4">
          <Faq
            label="The quick brown fox jumps over the lazy dog."
            text="The quick brown fox jumps over the lazy dog."
          />

          <Faq
            label="The quick brown fox jumps over the lazy dog."
            text="The quick brown fox jumps over the lazy dog."
          />

          <Faq
            label="The quick brown fox jumps over the lazy dog."
            text="The quick brown fox jumps over the lazy dog."
          />

          <Faq
            label="The quick brown fox jumps over the lazy dog."
            text="The quick brown fox jumps over the lazy dog."
          />
        </div>

        <div className="mt-20 flex flex-col place-items-center gap-4">
          <div className="text-3xl max-md:text-2xl">Still have questions?</div>
          <a
            href="http://"
            className="btn rounded-full! border! border-solid! border-gray-300! bg-transparent! transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </section>

      <section className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%] max-md:px-2">
        <div className="flex w-full max-w-[80%] place-content-center place-items-center justify-between gap-3 rounded-lg border border-outlineColor bg-secondary p-6 max-md:max-w-full max-md:flex-col">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl text-gray-300 max-md:text-xl">
              Join our newsletter
            </h2>
            <div className="text-gray-300">
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>

          <div className="flex h-15 place-items-center gap-2 overflow-hidden p-2">
            <input
              type="email"
              className="input h-full w-full border-gray-600! p-2 outline-none"
              placeholder="email"
            />
            <a
              className="btn !rounded-full! border! border-solid! border-gray-300! bg-transparent! transition-colors duration-300"
              href={repo_url}
            >
              Signup
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-auto flex w-full place-content-around gap-3 p-[5%] px-[10%] text-white max-md:flex-col">
        <div className="flex h-full w-62.5 flex-col gap-6 max-md:w-full">
          <img src="/assets/logo/logo.png" alt="logo" className="max-w-50" />
          <div>
            We have
            <br />
            Address..ses?
          </div>
          <div className="mt-3 text-lg font-semibold">Follow us</div>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com/"
              className="h-10 w-10"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className="flex h-full w-62.5 flex-col gap-4">
          <h2 className="text-3xl max-md:text-xl">Company</h2>
          <div className="flex flex-col gap-3 max-md:text-sm">
            <a href="#use-cases" className="footer-link">
              Use cases
            </a>
            <a href="#integrations" className="footer-link">
              Integrations
            </a>
            <a href="#change-logs" className="footer-link">
              Change logs
            </a>
            <a href="#blogs" className="footer-link">
              Blogs
            </a>
            <a href="#contact-us" className="footer-link">
              Contact
            </a>
          </div>
        </div>

        <div className="flex h-full w-62.5 flex-col gap-4">
          <h2 className="text-3xl max-md:text-xl">Resources</h2>
          <div className="flex flex-col gap-3 max-md:text-sm">
            <a href="#about-us" className="footer-link">
              About us
            </a>
            <a href="#faq" className="footer-link">
              FAQ
            </a>
            <a href="#contact-us" className="footer-link">
              Contact Us
            </a>
            <a href="#blogs" className="footer-link">
              Blogs
            </a>
            <a href="#privacy-policy" className="footer-link">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
