import Image from "next/image";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow reveal-one">Telecommunication engineering · Portfolio 2026</p>
        <h1 className="hero-title reveal-two">
          I design intelligence for the spaces <em>between signals.</em>
        </h1>
        <div className="hero-intro reveal-three">
          <p>
            Mahasiswa Teknik Telekomunikasi yang mengeksplorasi network security,
            arsitektur 4G/5G, dan deep learning untuk sistem posisi yang lebih akurat.
          </p>
          <a className="signal-button" href="#projects">
            Follow the signal
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>

      <div className="signal-portrait reveal-four">
        <div className="portrait-orbit orbit-one" aria-hidden="true" />
        <div className="portrait-orbit orbit-two" aria-hidden="true" />
        <div className="portrait-frame">
          <Image
            src={heroImage}
            alt="Ilustrasi engineer telekomunikasi"
            priority
            sizes="(max-width: 768px) 82vw, 38vw"
          />
        </div>
        <div className="signal-node node-one" aria-hidden="true"><span>5G</span></div>
        <div className="signal-node node-two" aria-hidden="true"><span>GNN</span></div>
        <div className="signal-node node-three" aria-hidden="true"><span>QoS</span></div>
        <div className="portrait-readout">
          <span>RX / 08</span>
          <strong>Signal acquired</strong>
          <small>107° 36&apos; E · 6° 55&apos; S</small>
        </div>
      </div>

      <div className="hero-ticker" aria-label="Areas of focus">
        <span>Network security</span><i />
        <span>4G / 5G architecture</span><i />
        <span>Indoor positioning</span><i />
        <span>Deep learning</span>
      </div>
    </section>
  );
}
