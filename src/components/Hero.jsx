export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Telecommunication Engineering Portfolio</p>
        <h1 className="hero-title">
          Hi, I build systems for networks, data, and the web.
        </h1>
        <p className="hero-text">
          Mahasiswa Teknik Telekomunikasi yang fokus pada network security, 4G/5G architecture,
          deep learning, dan web development. Ini ruang sederhana untuk menampilkan pekerjaan,
          eksperimen, dan catatan perkembangan saya.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">View projects</a>
          <a className="button-secondary" href="#about">About me</a>
        </div>
      </div>
      <div className="hero-card" aria-label="Profile photo placeholder">
        <div className="profile-placeholder" aria-hidden="true">
          <span>Your photo</span>
        </div>
        <span>Current focus</span>
        <p>Learning by building: portfolio, PostgreSQL-backed content, and applied network projects.</p>
      </div>
    </section>
  );
}
