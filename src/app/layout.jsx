import "./globals.css";

export const metadata = {
  title: "Portfolio | Telecommunication Engineer",
  description: "Portfolio mahasiswa Teknik Telekomunikasi yang berfokus pada jaringan dan deep learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
