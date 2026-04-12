// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsSidebar from '../components/ProjectsSidebar'; // Import komponen baru

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      
      {/* Container utama dengan padding */}
      <main className="px-6 py-8 mx-auto max-w-7xl">
        
        {/* Layout Grid 70 : 30 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
          
          {/* Kolom Kiri - 70% (7 dari 10 kolom pada layar besar) */}
          <div className="lg:col-span-7">
            <Hero />
          </div>

          {/* Kolom Kanan - 30% (3 dari 10 kolom pada layar besar) */}
          <div className="lg:col-span-3">
            <ProjectsSidebar />
          </div>

        </div>

      </main>
    </div>
  );
}