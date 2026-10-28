export default function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-[120px] border-t border-line py-24 lg:py-36">
      <div className="grid gap-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <div className="h-fit lg:sticky lg:top-[110px]">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">Capabilities</span>
        </div>
        <h2 className="max-w-[680px] text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.025em]">Tools and topics I use while learning and building.</h2>
      </div>
      <div className="mt-14 grid gap-x-12 gap-y-12 lg:pl-[300px] max-lg:mt-12 sm:grid-cols-3">
        {skills.map(group => (
          <div key={group.id}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink">{group.name}</h3>
            <ul className="mt-5 space-y-3">
              {group.items.map(item => (
                <li key={item} className="flex items-center gap-3 text-[0.95rem] font-medium text-ink-soft">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}