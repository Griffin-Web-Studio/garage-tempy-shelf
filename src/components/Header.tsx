import React from "react";

interface HeaderProps {
  RESPONSIVE_WIDTH: number;
  repo_url: string;
}

const Header = ({ RESPONSIVE_WIDTH, repo_url }: HeaderProps) => {
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
  }, [collapsedHeaderItems, setIsHeaderCollapsed, RESPONSIVE_WIDTH]);

  return (
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
  );
};

export default Header;
