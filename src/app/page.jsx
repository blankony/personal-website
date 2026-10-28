import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsSidebar from "../components/ProjectsSidebar";
import Skills from "../components/Skills";
import { getPortfolioData } from "../lib/portfolio";

export default function Home() {
  const { profile, projects, skills } = getPortfolioData();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="mx-auto w-[min(100%-40px,1040px)] max-sm:w-[min(100%-28px,1040px)] xl:ml-[310px] xl:mr-auto xl:w-[min(100%-350px,1040px)]">
          <About profile={profile} />
          <ProjectsSidebar projects={projects} />
          <Skills skills={skills} />
        </div>
      </main>
      <footer className="mx-auto w-[min(100%-40px,1040px)] max-sm:w-[min(100%-28px,1040px)] xl:ml-[310px] xl:mr-auto xl:w-[min(100%-350px,1040px)]">
        <div className="flex flex-col gap-5 border-t border-line py-9 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Arya Setiawan · Telecommunication &amp; Antenna Engineering
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-signal focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-signal/35" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-signal focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-signal/35" href="#home">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}