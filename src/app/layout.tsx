import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css"; // Karena sekarang globals.css sudah di folder yang sama dengan layout.tsx

// Setup font Playfair untuk Judul
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  style: ['italic', 'normal'],
  weight: ['400', '700']
});

// Setup font Montserrat untuk teks biasa
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}