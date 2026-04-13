// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20">
          
          <div className="text-2xl font-bold text-blue-600 shrink-0 w-32">
            Portfolio.
          </div>
          
          <div className="hidden md:flex justify-center flex-1 space-x-12 text-lg font-medium text-gray-600">
            <a href="#home" className="transition-colors hover:text-blue-600">Home</a>
            <a href="#about" className="transition-colors hover:text-blue-600">About</a>
            <a href="#skills" className="transition-colors hover:text-blue-600">Skills</a>
            <a href="#projects" className="transition-colors hover:text-blue-600">Projects</a>
          </div>

          <div className="hidden md:block w-32"></div>

        </div>
      </div>
    </nav>
  );
}