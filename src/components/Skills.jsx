export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-16 scroll-mt-24">
      <h2 className="mb-8 text-3xl font-bold text-gray-900 flex items-center gap-3">
        <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
        Technical Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span 
            key={skill.id}
            className="px-6 py-3 text-md font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-2xl transition-all hover:bg-blue-100"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
