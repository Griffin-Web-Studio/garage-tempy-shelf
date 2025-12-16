import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import IconCards from "./sections/IconCards";
import ColouredIconCards from "./sections/ColouredIconCards";
import ImageTextLayout from "./sections/ImageTextLayout";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const isDevelopment = import.meta.env.DEV;
  const repo_url = "https://github.com/InvoiceShelf/InvoiceShelf";
  const RESPONSIVE_WIDTH = 1024;

  const gsapContainer = React.useRef<HTMLDivElement>(null);

  const tqbfjotld = "The quick brown fox jumps over the lazy dog.";

  useGSAP(
    () => {
      gsap.to(".reveal-up", {
        opacity: 0,
        y: "100%",
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

  return (
    <div ref={gsapContainer}>
      {isDevelopment && (
        <Header RESPONSIVE_WIDTH={RESPONSIVE_WIDTH} repo_url={repo_url} />
      )}

      <Hero RESPONSIVE_WIDTH={RESPONSIVE_WIDTH} />

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

      {isDevelopment && (
        <>
          <IconCards
            title="Key benefits"
            items={[
              {
                label: "Benefit X",
                body: tqbfjotld,
                icon: "bi-rocket-takeoff-fill",
              },
              {
                label: "Benefit Y",
                body: tqbfjotld,
                icon: "bi-layout-sidebar-inset",
              },
              {
                label: "Benefit Z",
                body: tqbfjotld,
                icon: "bi-lightning-charge-fill",
              },
            ]}
          />

          <ColouredIconCards
            title="Features loved by everyone"
            items={[
              {
                label: "Feature A",
                body: `${tqbfjotld} ${tqbfjotld}`,
                icon: "bi-globe",
              },
              {
                label: "Feature B",
                body: `${tqbfjotld} ${tqbfjotld}`,
                icon: "bi-bar-chart-fill",
              },
              {
                label: "Feature C",
                body: `${tqbfjotld} ${tqbfjotld}`,
                icon: "bi-cloud-fill",
              },
              {
                label: "Feature D",
                body: `${tqbfjotld} ${tqbfjotld}`,
                icon: "bi-fingerprint",
              },
              {
                label: "Feature E",
                body: `${tqbfjotld} ${tqbfjotld}`,
                icon: "bi-sliders",
              },
              {
                label: "Feature F",
                body: `${tqbfjotld} ${tqbfjotld}`,
                icon: "bi-gear-fill",
              },
            ]}
          />

          <ImageTextLayout
            title="Simple to use plugins"
            image="/assets/images/home/dash.png"
            items={[
              {
                icon: "bi-check-all",
                label: "Plug the ins",
                body: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
              },
              {
                icon: "bi-check-all",
                label: "Ins the plug",
                body: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
              },
            ]}
          />

          <ImageTextLayout
            rev
            title="Powerful Insights"
            image="/assets/images/home/dash.png"
            items={[
              {
                icon: "bi-check-all",
                label: "Easy to use",
                body: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
              },
              {
                icon: "bi-check-all",
                label: "All in one panel",
                body: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
              },
            ]}
          />

          <section className="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%]">
            <h3 className="text-4xl font-medium text-gray-200 max-md:text-2xl">
              You're in good hands
            </h3>
            {/* Testimonials */}
            <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
              <div className="reveal-up flex h-fit w-87.5 break-inside-avoid flex-col gap-4 rounded-lg border border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
                <p className="mt-4 text-gray-300">{tqbfjotld}</p>

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
                  {tqbfjotld} {tqbfjotld} {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld}
                </p>
                <hr />
                <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
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
                  {tqbfjotld} {tqbfjotld}
                </p>
                <hr />
                <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
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
                <p className="mt-3 text-center text-gray-300">{tqbfjotld}</p>
                <hr />
                <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-200">
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
                  <li>{tqbfjotld}</li>
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
                  {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld}
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
                  {tqbfjotld} {tqbfjotld}
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
              <Faq label={tqbfjotld} text={tqbfjotld} />

              <Faq label={tqbfjotld} text={tqbfjotld} />

              <Faq label={tqbfjotld} text={tqbfjotld} />

              <Faq label={tqbfjotld} text={tqbfjotld} />
            </div>

            <div className="mt-20 flex flex-col place-items-center gap-4">
              <div className="text-3xl max-md:text-2xl">
                Still have questions?
              </div>
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
                <div className="text-gray-300">{tqbfjotld}</div>
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
              <img
                src="/assets/logo/logo.png"
                alt="logo"
                className="max-w-50"
              />
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
        </>
      )}
    </div>
  );
}

export default App;
