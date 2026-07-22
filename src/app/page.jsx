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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-10">
          <div className="flex flex-col space-y-4 lg:col-span-7">
            <Hero />
            <div className="h-px w-full bg-gray-200" />
            <About />
            <div className="h-px w-full bg-gray-200" />
            <Skills skills={skills} />
          </div>
          <aside className="top-28 lg:sticky lg:col-span-3">
            <ProjectsSidebar projects={projects} />
          </aside>
        </div>
      </main>
    </div>
  );
}
