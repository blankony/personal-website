export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section section-anchor">
      <div className="skills-intro">
        <div className="section-label">
          <span>Capabilities</span>
          <small>Tools across the stack</small>
        </div>
        <h2>A hybrid toolkit for networks, models, and interfaces.</h2>
      </div>
      <div className="skill-matrix">
        {skills.map((skill, index) => (
          <div key={skill.id} className="skill-cell">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{skill.name}</strong>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
