import React from "react";

interface FaqProps {
  label: string;
  text: string;
}

const Faq = ({ label, text }: FaqProps) => {
  const toggleRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const toggle = toggleRef.current;
    const content = contentRef.current;

    if (!toggle || !content) return;

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");

      if (content.style.maxHeight === "200px") {
        content.style.maxHeight = "0px";
        content.style.padding = "0px 18px";
      } else {
        content.style.maxHeight = "200px";
        content.style.padding = "20px 18px";
      }
    });
  }, [toggleRef, contentRef]);

  return (
    <div className="faq w-full rounded-md border-[1px] border-solid border-[#1F2123] bg-[#080808]">
      <div
        className="faq-accordion flex w-full select-none text-xl max-md:text-lg"
        ref={toggleRef}
      >
        <span>{label}</span>

        <i className="bi bi-plus ml-auto font-semibold"></i>
      </div>

      <div className="content" ref={contentRef}>
        {text}
      </div>
    </div>
  );
};

export default Faq;
