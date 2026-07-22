import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsSidebar from "../components/ProjectsSidebar";
import Skills from "../components/Skills";
import { getPortfolioData } from "../lib/portfolio";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { projects, skills } = await getPortfolioData();

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <div className="content-frame">
          <About />
          <ProjectsSidebar projects={projects} />
          <Skills skills={skills} />
        </div>
      </main>
      <footer className="site-footer">
        <p>Designed at the intersection of radio, networks, and learning systems.</p>
        <a href="#home">Return to signal origin ↑</a>
      </footer>
    </div>
  );
}
