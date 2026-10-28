import LocalImage from "./LocalImage";
import ProjectGlyph from "./ProjectGlyph";

export default function ProjectsSidebar({ projects }) {
  return (
    <section id="projects" className="scroll-mt-[120px] border-t border-line py-24 lg:py-36">
      <div className="grid gap-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <div className="h-fit lg:sticky lg:top-[110px]">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">Projects</span>
        </div>
        <p className="max-w-[680px] text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.025em]">Work I keep building on — antennas, networks, and applied ML.</p>
      </div>

      <div className="mt-14 lg:pl-[300px]">
        {projects.map(project => (
          <article key={project.id} className="grid gap-7 border-t border-line py-10 max-sm:py-8 sm:grid-cols-[minmax(160px,220px)_minmax(0,1fr)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-raised max-sm:aspect-[16/9]">
              <LocalImage
                src={project.image}
                alt={`Preview: ${project.title}`}
                sizes="(min-width: 640px) 220px, 90vw"
                placeholder="Project image"
                fallback={<ProjectGlyph variant={project.id} className="p-7" />}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em]">{project.title}</h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">{project.technology}</span>
              </div>
              <p className="mt-4 max-w-[680px] text-ink-soft">{project.description}</p>
              {project.results?.length > 0 && (
                <ul className="mt-5 grid max-w-[680px] gap-2">
                  {project.results.map(result => (
                    <li key={result} className="flex gap-2.5 text-[0.95rem] text-ink">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
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
                  className="mt-6 inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-raised focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-signal/35"
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