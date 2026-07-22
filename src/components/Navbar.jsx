export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span>Portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
      </div>
    </nav>
  );
}
