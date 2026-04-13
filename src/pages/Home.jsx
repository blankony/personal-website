import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsSidebar from '../components/ProjectsSidebar';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      <Navbar />
      
      <main className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 items-start">
          
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <Hero />
            <div className="h-px bg-gray-200 w-full"></div>
            <About />
            <div className="h-px bg-gray-200 w-full"></div>
            <Skills />
          </div>

          <div className="lg:col-span-3 sticky top-28">
            <ProjectsSidebar />
          </div>

        </div>
      </main>
    </div>
  );
}