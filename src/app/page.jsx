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
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto w-[min(100%-40px,1120px)] max-sm:w-[min(100%-28px,1120px)]">
          <About />
          <ProjectsSidebar projects={projects} />
          <Skills skills={skills} />
        </div>
      </main>
      <footer className="mx-auto flex w-[min(100%-40px,1120px)] flex-col gap-6 border-t border-[#deded4] py-9 text-sm text-[#6b6b63] sm:flex-row sm:items-center sm:justify-between max-sm:w-[min(100%-28px,1120px)]">
        <p>Portfolio · built with Next.js and PostgreSQL</p>
        <a className="font-bold text-[#151515] transition-colors hover:text-[#1f5eff] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f5eff]/35" href="#home">Back to top</a>
      </footer>
    </div>
  );
}
