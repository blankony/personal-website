// src/components/ProjectsSidebar.jsx
export default function ProjectsSidebar() {
  const projects = [
    {
      id: 1,
      title: "Analisis Asosiatif QoS 4G LTE",
      tech: "Telecommunications",
      desc: "Menganalisis dampak parameter jaringan terhadap mikrodinamika latensi game Mobile Legends."
    },
    {
      id: 2,
      title: "Hybrid TabNet & GNN",
      tech: "Deep Learning",
      desc: "Model prediksi untuk indoor positioning berdasarkan dataset UJIIndoorLoc."
    },
    {
      id: 3,
      title: "OBS Countdown Overlay",
      tech: "Lua Script",
      desc: "Script otomatisasi waktu mundur custom untuk kebutuhan siaran turnamen."
    }
  ];

  return (
    <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl h-fit">
      <h2 className="flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
        Recent Projects
      </h2>
      
      <div className="flex flex-col space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <h3 className="font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
              {project.title}
            </h3>
            <span className="inline-block px-2 py-1 mt-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md">
              {project.tech}
            </span>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}