// src/components/Skills.jsx
export default function Skills() {
  const skills = [
    "Python", "React & Vite", "Tailwind CSS", 
    "Deep Learning (TabNet & GNN)", "Network Security", 
    "4G LTE / 5G Architecture", "Data Compression"
  ];

  return (
    <section className="py-8 mb-12">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}