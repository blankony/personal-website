export default function ProjectsSidebar() {
  const projects = [
    {
      id: 1,
      title: "Analisis QoS Jaringan 4G LTE",
      tech: "Network Analysis",
      desc: "Studi kasus mikrodinamika latensi pada game Mobile Legends: Bang Bang."
    },
    {
      id: 2,
      title: "Indoor Positioning System",
      tech: "Deep Learning",
      desc: "Implementasi hybrid model TabNet + GNN menggunakan dataset UJIIndoorLoc."
    },
    {
      id: 3,
      title: "OBS Tournament Countdown",
      tech: "Lua Script",
      desc: "Script otomatisasi countdown untuk overlay siaran langsung turnamen."
    }
  ];

  return (
    <div id="projects" className="p-8 bg-white border border-gray-100 shadow-xl rounded-3xl">
      <h2 className="flex items-center gap-3 mb-8 text-2xl font-bold text-gray-900">
        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
        Top Projects
      </h2>
      
      <div className="flex flex-col space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <h3 className="text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600">
              {project.title}
            </h3>
            <span className="inline-block px-3 py-1 mt-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-lg">
              {project.tech}
            </span>
            <p className="mt-3 text-md text-gray-500 leading-relaxed">
              {project.desc}
            </p>
            <div className="mt-4 w-full h-px bg-gray-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
}