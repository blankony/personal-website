export default function ProjectsSidebar({ projects }) {
  return (
    <section id="projects" className="projects-section section-anchor">
      <div className="projects-heading">
        <div className="section-label section-label-light">
          <span>Selected transmissions</span>
          <small>Experiments sent into the field</small>
        </div>
        <p>Three projects that translate theory into measurable behavior.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article key={project.id} className="project-row">
            <span className="project-index">TX-{String(index + 1).padStart(2, "0")}</span>
            <div className="project-main">
              <p className="project-tech">{project.technology}</p>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-wave" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, waveIndex) => (
                <i key={waveIndex} style={{ "--wave": waveIndex }} />
              ))}
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
