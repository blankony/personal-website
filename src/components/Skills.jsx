export default function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-[120px] border-t border-[#deded4] py-24 lg:py-36">
      <div className="grid gap-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <div className="h-fit lg:sticky lg:top-[110px]">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">Skills</span>
        </div>
        <h2 className="max-w-[680px] text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.12] tracking-[-0.045em]">Tools and topics I use while learning and building.</h2>
      </div>
      <div className="mt-16 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div key={skill.id} className="flex min-h-32 flex-col justify-between rounded-2xl border border-[#deded4] bg-white p-5">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">{String(index + 1).padStart(2, "0")}</span>
            <strong className="text-lg leading-snug">{skill.name}</strong>
            <i className="h-1 w-6 rounded-full bg-[#1f5eff]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
