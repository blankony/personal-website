// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-blue-600 shrink-0">
            Portfolio.
          </div>
          <div className="hidden space-x-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Projects</a>
          </div>
        </div>
      </div>
    </nav>
  );
}