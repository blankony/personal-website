// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsSidebar from '../components/ProjectsSidebar';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      
      <main className="px-6 py-8 mx-auto max-w-7xl">
        {/* Tambahkan items-start agar sticky bisa bekerja */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10 items-start">
          
          {/* Kolom Kiri (70%) - Berisi konten memanjang */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200">
            <Hero />
            <About />
            <Skills />
          </div>

          {/* Kolom Kanan (30%) - Sticky Sidebar */}
          {/* class 'sticky top-24' membuat elemen ini diam di posisi saat web di-scroll */}
          <div className="lg:col-span-3 sticky top-24">
            <ProjectsSidebar />
          </div>

        </div>
      </main>
    </div>
  );
}