export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span className="brand-mark" aria-hidden="true">⌁</span>
          <span>ARY / SIGNAL LAB</span>
        </a>
        <div className="nav-links">
          <a href="#about">Profile</a>
          <a href="#projects">Transmissions</a>
          <a href="#skills">Capabilities</a>
        </div>
        <span className="nav-status"><i /> Bandung · Available</span>
      </div>
    </nav>
  );
}
