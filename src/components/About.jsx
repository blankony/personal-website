import LocalImage from "./LocalImage";

export default function About({ profile }) {
  return (
    <section id="about" className="grid scroll-mt-[120px] gap-9 border-t border-line py-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20 lg:py-36">
      <div className="h-fit lg:sticky lg:top-[110px]">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">About</span>
      </div>
      <div>
        <p className="max-w-[860px] text-[clamp(2rem,4.6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
          I care about how networks behave, how antennas radiate, and how data
          can answer real engineering questions.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-[minmax(0,1fr)_260px] sm:gap-16">
          <div>
            <p className="max-w-[620px] leading-relaxed text-ink-soft">
              I am a 7th-semester telecommunication engineering student working
              on microstrip antenna design during my research internship at
              BRIN — from CST simulation to S-parameter measurement. Alongside
              that I study 3GPP LTE, QoS optimization, and applied machine
              learning for positioning problems. This site is where I publish
              what I build, not a finished monument.
            </p>
            <dl className="mt-10 max-w-[620px] border-t border-line text-sm">
              <div className="flex justify-between gap-5 border-b border-line py-4"><dt>Current mode</dt><dd className="text-right font-semibold text-ink">Semester 7 · BRIN intern</dd></div>
              <div className="flex justify-between gap-5 border-b border-line py-4"><dt>Primary lens</dt><dd className="text-right font-semibold text-ink">Antennas &amp; networks</dd></div>
              <div className="flex justify-between gap-5 border-b border-line py-4"><dt>From</dt><dd className="text-right font-semibold text-ink">Tangerang, ID</dd></div>
            </dl>
          </div>
          <figure className="h-fit">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-raised">
              <LocalImage
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                sizes="(min-width: 640px) 260px, 90vw"
                placeholder="Portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
              {profile.name} · BRIN internship
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}