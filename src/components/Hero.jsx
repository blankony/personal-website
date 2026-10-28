import S11Panel from "./S11Panel";

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[calc(100svh-76px)] w-[min(100%-40px,1040px)] items-center gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:gap-20 lg:py-28 max-sm:min-h-0 max-sm:w-[min(100%-28px,1040px)] xl:ml-[310px] xl:mr-auto xl:w-[min(100%-350px,1040px)]">
      <div className="rise">
        <h1 className="max-w-[820px] text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Antennas, measured.
        </h1>
        <p className="mt-8 max-w-[620px] text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-ink-soft">
          I&apos;m Arya Setiawan — a telecommunication engineering student
          designing microstrip antennas at BRIN, from CST simulation to
          measured S-parameters. I also work on network analysis and applied
          machine learning.
        </p>
        <div className="mt-10 flex flex-wrap gap-3.5">
          <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-signal/35" href="#projects">View projects</a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 font-bold transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-raised focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-signal/35" href="mailto:aryasetiawan112@gmail.com">Contact me</a>
        </div>
      </div>
      <div className="rise [animation-delay:120ms]">
        <S11Panel />
      </div>
    </section>
  );
}