import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import IconCards from "./sections/IconCards";
import ColouredIconCards from "./sections/ColouredIconCards";
import ImageTextLayout from "./sections/ImageTextLayout";
import Testimonies from "./sections/Testimonies";
import PriceCards from "./sections/PriceCards";
import BlogFeed from "./sections/BlogFeed";
import Faqs from "./sections/Faqs";
import Newsletter from "./sections/Newsletter";

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

      <IconCards
        title="Key Benefits"
        items={[
          {
            label: "Dockerised",
            body: "Spin up at will using our official docker image.",
            icon: "bi-box-fill",
          },
          {
            label: "Data Control",
            body: "You own your data! no one else, you!",
            icon: "bi-database-check",
          },
          {
            label: "Simple UI",
            body: "Simplicity at the core, we don't want to complicate things.",
            icon: "bi-layout-sidebar-inset",
          },
        ]}
      />

      {isDevelopment && (
        <>
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

          <Testimonies
            title="You're in good hands"
            testimonials={[
              {
                quote: `${tqbfjotld} ${tqbfjotld}`,
                author: "Author 1",
                position: "Probably CEO",
                profilePic: "/assets/images/home/dash.png",
              },
              {
                quote: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
                author: "Author 1",
                position: "Probably CEO",
                profilePic: "/assets/images/home/dash.png",
              },
              {
                quote: `${tqbfjotld} ${tqbfjotld}`,
                author: "Author 1",
                position: "Probably CEO",
                profilePic: "/assets/images/home/dash.png",
              },
              {
                quote: `${tqbfjotld}`,
                author: "Author 1",
                position: "Probably CEO",
                profilePic: "/assets/images/home/dash.png",
              },
              {
                quote: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
                author: "Author 1",
                position: "Probably CEO",
                profilePic: "/assets/images/home/dash.png",
              },
              {
                quote: `${tqbfjotld}`,
                author: "Author 1",
                position: "Probably CEO",
                profilePic: "/assets/images/home/dash.png",
              },
            ]}
          />

          <PriceCards
            title="Simple pricing"
            subTitle="We don't really know why this section exist ether 🤷"
            cards={[
              {
                price: "£0",
                cycleDuration: "annum",
                description: "*minus the infrastructure costs",
                items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
                ctaLabel: "Start now",
                ctaUrl: repo_url,
              },
              {
                price: "£00",
                cycleDuration: "annum",
                description: "*minus the infrastructure costs",
                items: [
                  "Everything in previous plan plus:",
                  "Item 6",
                  "Item 7",
                  "Item 8",
                  "Item 9",
                  "Item 10",
                ],
                ctaLabel: "Start now",
                ctaUrl: repo_url,
                eyeSnag: true,
              },
              {
                price: "£000",
                cycleDuration: "annum",
                description: "*minus the infrastructure costs",
                items: [
                  "Everything in previous plan plus:",
                  "Item 11",
                  "Item 12",
                  "Item 13",
                  "Item 14",
                  "Item 15",
                ],
                ctaLabel: "Start now",
                ctaUrl: repo_url,
              },
            ]}
          />

          <BlogFeed
            title="Read our articles ✨"
            posts={[
              {
                title: "Article 1",
                excerpt: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
                img: "/assets/images/home/dash.png",
                url: repo_url,
              },
              {
                title: "Article 1",
                excerpt: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
                img: "/assets/images/home/dash.png",
                url: repo_url,
              },
              {
                title: "Article 1",
                excerpt: `${tqbfjotld} ${tqbfjotld} ${tqbfjotld}`,
                img: "/assets/images/home/dash.png",
                url: repo_url,
              },
            ]}
          />

          <Faqs
            ctaTitle="Still have questions?"
            title="Faq"
            ctaLabel="Contact"
            ctaUrl={repo_url}
            faqs={[
              {
                label: tqbfjotld,
                text: tqbfjotld,
              },
              {
                label: tqbfjotld,
                text: tqbfjotld,
              },
              {
                label: tqbfjotld,
                text: tqbfjotld,
              },
            ]}
          />

          <Newsletter
            title="Join our newsletter"
            subHeading={tqbfjotld}
            formAction="/"
            ctaLabel="Signup"
          />

          <footer className="mt-auto flex w-full place-content-around gap-3 p-[5%] px-[10%] text-white max-md:flex-col">
            <div className="flex h-full w-62.5 flex-col gap-6 max-md:w-full">
              <img
                src="/assets/logo/logo-white.png"
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
