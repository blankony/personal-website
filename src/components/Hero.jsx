// src/components/Hero.jsx
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center justify-between px-6 py-12 mx-auto max-w-7xl md:flex-row md:py-24">
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Welcome to My Website
        </h1>
        <p className="max-w-lg mb-8 text-lg text-gray-600">
          Telecommunications Engineering student exploring the intersections of Network Security, Deep Learning, and Real-Time Systems.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
            View Projects
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mb-8 md:w-1/2 md:mb-0">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full max-w-md rounded-lg shadow-lg" 
        />
      </div>
    </section>
  );
}