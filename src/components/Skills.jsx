export default function Skills({ skills }) {
  return (
    <section id="skills" className="section skills-section section-anchor">
      <div className="skills-intro">
        <div className="section-label">
          <span>Skills</span>
        </div>
        <h2>Tools and topics I use while learning and building.</h2>
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
