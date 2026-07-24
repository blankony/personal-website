export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[calc(100svh-76px)] w-[min(100%-40px,1120px)] items-end gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-24 lg:py-36 max-sm:min-h-0 max-sm:w-[min(100%-28px,1120px)]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">Telecommunication Engineering Portfolio</p>
        <h1 className="mt-5 max-w-[780px] text-[clamp(3rem,10vw,7.5rem)] font-extrabold leading-[0.94] tracking-[-0.08em]">
          Hi, I&apos;m Arya Setiawan.
        </h1>
        <p className="mt-9 max-w-[650px] text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-[#6b6b63]">
          Mahasiswa Teknik Telekomunikasi semester 7 asal Tangerang yang fokus pada network
          security, 4G/5G architecture, deep learning, dan web development. Ini ruang sederhana
          untuk menampilkan pekerjaan, eksperimen, dan catatan perkembangan saya.
        </p>
        <div className="mt-11 flex flex-wrap gap-3.5">
          <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#151515] px-6 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#projects">View projects</a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#deded4] px-6 font-bold transition duration-200 hover:-translate-y-0.5 hover:border-[#151515] hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#about">About me</a>
        </div>
      </div>
      <div className="rounded-3xl border border-[#deded4] bg-white p-7 shadow-[0_24px_80px_rgba(20,20,20,0.08)]" aria-label="Profile photo placeholder">
        <div className="relative mb-6 grid aspect-square place-items-center overflow-hidden rounded-2xl border border-dashed border-[#1f5eff]/35 bg-[#edf2ff] text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]/80 before:absolute before:inset-5 before:rounded-[inherit] before:border before:border-[#1f5eff]/20 before:content-['']">
          <span className="relative z-10">Your photo</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">Current focus</span>
        <p className="mt-5 text-[#6b6b63]">Learning by building: portfolio, PostgreSQL-backed content, and applied network projects.</p>
      </div>
    </section>
  );
}
