import "./globals.css";
import { Bricolage_Grotesque, Spline_Sans_Mono } from "next/font/google";
import DotGrid from "@/components/DotGrid";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
  display: "swap",
});

export const metadata = {
  title: "Arya Setiawan | Telecommunication & Antenna Engineer",
  description: "Portfolio of Arya Setiawan, telecommunication engineering student working on microstrip antenna design at BRIN.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="relative isolate bg-paper font-display text-ink antialiased">
        <div className="dot-grid-background pointer-events-none fixed inset-0 z-0 opacity-60" aria-hidden="true">
          <DotGrid
            dotSize={7}
            gap={22}
            baseColor="#8fa8e8"
            activeColor="#1f5eff"
            proximity={140}
            shockRadius={220}
            shockStrength={3}
            resistance={900}
            returnDuration={1.8}
            className="!p-0"
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}