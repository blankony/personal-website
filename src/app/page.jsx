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
        <p>Portfolio · built with Next.js and PostgreSQL</p>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  );
}
