import "./globals.css";
import ClickSpark from "@/components/ClickSpark";

export const metadata = {
  title: "Arya Setiawan | Telecommunication Engineer",
  description: "Portfolio Arya Setiawan, mahasiswa Teknik Telekomunikasi semester 7 asal Tangerang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#f7f7f3] text-[#151515] antialiased">
        <ClickSpark sparkColor="#1f5eff" sparkSize={12} sparkRadius={20}>
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
