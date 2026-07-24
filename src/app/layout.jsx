import "./globals.css";

export const metadata = {
  title: "Arya Setiawan | Telecommunication Engineer",
  description: "Portfolio Arya Setiawan, mahasiswa Teknik Telekomunikasi semester 7 asal Tangerang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#f7f7f3] text-[#151515] antialiased">{children}</body>
    </html>
  );
}
