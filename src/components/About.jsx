export default function About() {
  return (
    <section id="about" className="about-section section-anchor">
      <div className="section-label">
        <span>Profile</span>
        <small>What I tune into</small>
      </div>
      <div className="about-statement">
        <p>
          I work where <strong>physical infrastructure</strong> meets
          <strong> computational intelligence</strong>—from understanding how packets move
          through LTE networks to teaching models how to read an indoor radio environment.
        </p>
      </div>
      <div className="about-notes">
        <p>
          Saat ini saya mendalami 3GPP LTE release, optimasi QoS, Hybrid TabNet,
          dan Graph Neural Network untuk indoor positioning.
        </p>
        <dl>
          <div><dt>Current mode</dt><dd>Semester 6</dd></div>
          <div><dt>Primary lens</dt><dd>Systems thinking</dd></div>
          <div><dt>Based in</dt><dd>Bandung, ID</dd></div>
        </dl>
      </div>
    </section>
  );
}
