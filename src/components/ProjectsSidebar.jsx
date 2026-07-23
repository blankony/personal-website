export default function ProjectsSidebar({ projects }) {
  return (
    <section id="projects" className="scroll-mt-[120px] border-t border-[#deded4] py-24 lg:py-36">
      <div className="grid gap-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <div className="h-fit lg:sticky lg:top-[110px]">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">Projects</span>
        </div>
        <p className="max-w-[680px] text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.12] tracking-[-0.045em]">Beberapa pekerjaan yang ingin saya kembangkan dan rapikan terus.</p>
      </div>

      <div className="mt-16 grid gap-5">
        {projects.map((project, index) => (
          <article key={project.id} className="grid gap-6 rounded-3xl border border-[#deded4] bg-white/60 p-7 transition duration-200 hover:-translate-y-1 hover:border-[#1f5eff]/40 hover:bg-white sm:grid-cols-[80px_minmax(180px,260px)_minmax(0,1fr)] sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">{String(index + 1).padStart(2, "0")}</span>
            <div className="relative grid min-h-[210px] place-items-center overflow-hidden rounded-2xl border border-dashed border-[#1f5eff]/35 bg-[#edf2ff] text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]/80 before:absolute before:inset-5 before:rounded-[inherit] before:border before:border-[#1f5eff]/20 before:content-[''] sm:min-h-[170px]" aria-hidden="true">
              <span className="relative z-10">Project image</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">{project.technology}</p>
              <h2 className="mt-3 text-[clamp(1.55rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.04em]">{project.title}</h2>
              <p className="mt-5 max-w-[720px] text-[#6b6b63]">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
