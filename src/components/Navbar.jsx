"use client";

import { useCallback, useEffect, useState } from "react";
import OptionWheel from "./OptionWheel";

const sections = [
  { id: "home", label: "Home", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "skills", label: "Skills", number: "04" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = useCallback(index => {
    const section = document.getElementById(sections[index]?.id);
    if (!section) return;

    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;
      const marker = window.innerHeight * 0.42;
      let nextIndex = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= marker) nextIndex = index;
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        nextIndex = sections.length - 1;
      }

      setActiveIndex(current => (current === nextIndex ? current : nextIndex));
    };

    const handleScroll = () => {
      if (frameId == null) frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId != null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-20 rounded-full bg-[#151515] px-5 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0">
        Skip to content
      </a>

      <nav className="fixed left-6 top-1/2 z-40 hidden h-[360px] w-[250px] -translate-y-1/2 xl:block" aria-label="Primary navigation">
        <div className="absolute left-0 top-1/2 h-[292px] w-px -translate-y-1/2 bg-[#deded4]" aria-hidden="true" />
        <div className="absolute left-5 top-0">
          <a href="#home" onClick={event => { event.preventDefault(); scrollToSection(0); }} className="inline-flex min-h-11 items-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#151515] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35">
            Arya Setiawan
          </a>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#85857c]">Portfolio index</p>
        </div>

        <OptionWheel
          items={sections.map(section => `${section.number}  ${section.label}`)}
          selected={activeIndex}
          defaultSelected={0}
          onChange={scrollToSection}
          textColor="#8a8a82"
          activeColor="#1f5eff"
          side="left"
          fontSize={1.05}
          spacing={2.8}
          curve={0.7}
          tilt={7}
          blur={0}
          fade={0.24}
          minOpacity={0.28}
          smoothing={240}
          inset={20}
          draggable={false}
          wheelEnabled={false}
          className="focus-visible:rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35"
        />

        <div className="absolute bottom-0 left-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#85857c]">
          <span className="h-2 w-2 rounded-full bg-[#1f5eff]" aria-hidden="true" />
          Scroll to explore
        </div>
      </nav>

      <nav className="sticky top-0 z-40 border-b border-[#deded4]/80 bg-[#f7f7f3]/92 backdrop-blur-xl xl:hidden" aria-label="Primary navigation">
        <div className="mx-auto flex min-h-[68px] w-[min(100%-28px,1120px)] items-center justify-between gap-4">
          <a href="#home" onClick={event => { event.preventDefault(); scrollToSection(0); }} className="inline-flex min-h-11 items-center font-extrabold tracking-[-0.03em] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35">
            Arya Setiawan
          </a>
          <div className="flex items-center gap-1" aria-label="Page sections">
            {sections.slice(1).map((section, index) => {
              const sectionIndex = index + 1;
              const isActive = activeIndex === sectionIndex;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={event => { event.preventDefault(); scrollToSection(sectionIndex); }}
                  className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1f5eff]/35 max-sm:px-2.5 max-sm:text-xs ${isActive ? "bg-[#1f5eff] text-white" : "text-[#6b6b63] hover:bg-white hover:text-[#151515]"}`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
