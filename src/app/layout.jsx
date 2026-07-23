import "./globals.css";

export const metadata = {
  title: "Portfolio | Telecommunication Engineer",
  description: "Portfolio mahasiswa Teknik Telekomunikasi yang berfokus pada jaringan dan deep learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#f7f7f3] text-[#151515] antialiased">{children}</body>
    </html>
  );
}
