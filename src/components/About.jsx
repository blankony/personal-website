export default function About() {
  return (
    <section id="about" className="grid scroll-mt-[120px] gap-9 border-t border-[#deded4] py-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20 lg:py-36">
      <div className="h-fit lg:sticky lg:top-[110px]">
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]">About</span>
      </div>
      <div>
        <p className="max-w-[820px] text-[clamp(2rem,5vw,4.1rem)] leading-[1.08] tracking-[-0.055em]">
          Saya tertarik pada cara jaringan bekerja, cara data diproses, dan cara model machine learning
          bisa membantu menyelesaikan masalah teknis yang nyata.
        </p>
      </div>
      <div className="grid gap-8 text-[#6b6b63] lg:col-start-2 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:gap-16">
        <p className="max-w-[640px]">
          Saat ini saya mendalami 3GPP LTE release, optimasi QoS, Hybrid TabNet, dan Graph Neural
          Network untuk indoor positioning. Website ini saya buat sebagai tempat berkembang, bukan
          hasil final yang kaku.
        </p>
        <dl className="border-t border-[#deded4]">
          <div className="flex justify-between gap-5 border-b border-[#deded4] py-4"><dt>Current mode</dt><dd className="text-right font-semibold text-[#151515]">Semester 7</dd></div>
          <div className="flex justify-between gap-5 border-b border-[#deded4] py-4"><dt>Primary lens</dt><dd className="text-right font-semibold text-[#151515]">Systems thinking</dd></div>
          <div className="flex justify-between gap-5 border-b border-[#deded4] py-4"><dt>From</dt><dd className="text-right font-semibold text-[#151515]">Tangerang, ID</dd></div>
        </dl>
      </div>
    </section>
  );
}
