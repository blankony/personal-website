export default function ProjectsSidebar({ projects }) {
  return (
    <section id="projects" className="section projects-section section-anchor">
      <div className="projects-heading">
        <div className="section-label">
          <span>Projects</span>
        </div>
        <p>Beberapa pekerjaan yang ingin saya kembangkan dan rapikan terus.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article key={project.id} className="project-row">
            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-image-placeholder" aria-hidden="true">
              <span>Project image</span>
            </div>
            <div className="project-main">
              <p className="project-tech">{project.technology}</p>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
