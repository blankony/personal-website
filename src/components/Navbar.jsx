export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[#deded4]/80 bg-[#f7f7f3]/90 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="mx-auto flex min-h-[76px] w-[min(100%-40px,1120px)] items-center justify-between gap-8 max-sm:min-h-[68px] max-sm:w-[min(100%-28px,1120px)]">
        <a className="inline-flex min-h-11 items-center font-bold tracking-[-0.03em] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#home" aria-label="Portfolio home">
          <span>Arya Setiawan</span>
        </a>
        <div className="flex items-center gap-5 text-sm text-[#6b6b63] sm:gap-10 sm:text-[0.95rem]">
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-[#151515] focus-visible:text-[#151515] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#about">About</a>
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-[#151515] focus-visible:text-[#151515] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#projects">Projects</a>
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-[#151515] focus-visible:text-[#151515] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#skills">Skills</a>
        </div>
      </div>
    </nav>
  );
}
