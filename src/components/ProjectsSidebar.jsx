import LocalImage from "./LocalImage";

export default function ProjectsSidebar({ projects }) {
  return (
    <section id="projects" className="scroll-mt-[120px] border-t border-[#deded4] py-24 lg:py-36">
      <div className="grid gap-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <div className="h-fit lg:sticky lg:top-[110px]">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">Projects</span>
        </div>
        <p className="max-w-[680px] text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.12] tracking-[-0.045em]">Work I keep building on — antennas, networks, and applied ML.</p>
      </div>

      <div className="mt-16 grid gap-5">
        {projects.map((project, index) => (
          <article key={project.id} className="grid gap-6 rounded-3xl border border-[#deded4] bg-white/60 p-7 transition duration-200 hover:-translate-y-1 hover:border-[#1f5eff]/40 hover:bg-white sm:grid-cols-[80px_minmax(180px,260px)_minmax(0,1fr)] sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">{String(index + 1).padStart(2, "0")}</span>
            <div className="relative min-h-[210px] overflow-hidden rounded-2xl border border-[#deded4] sm:min-h-[170px]">
              <LocalImage
                src={project.image}
                alt={`Preview ${project.title}`}
                sizes="(min-width: 640px) 260px, 90vw"
                placeholder="Project image"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">{project.technology}</p>
              <h2 className="mt-3 text-[clamp(1.55rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.04em]">{project.title}</h2>
              <p className="mt-5 max-w-[720px] text-[#6b6b63]">{project.description}</p>
              {project.results?.length > 0 && (
                <ul className="mt-5 grid max-w-[720px] gap-2">
                  {project.results.map(result => (
                    <li key={result} className="flex gap-2.5 text-[0.95rem] text-[#151515]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f5eff]" aria-hidden="true" />
                      {result}
                    </li>
                  ))}
                </ul>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[#deded4] px-5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:border-[#151515] hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35"
                >
                  View project →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
