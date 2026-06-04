import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "MV Games | Distribuidora y Editorial de Juegos de Mesa Modernos",
  description: "Impulsamos la industria de juegos de mesa en la región. Distribución para tiendas, servicios de editorial, producción a medida y consultoría de alta gama.",
  keywords: ["juegos de mesa", "distribuidora de juegos de mesa", "editorial de juegos", "produccion de juegos", "consultoria de juegos", "MV Games"],
  openGraph: {
    title: "MV Games | Distribuidora y Editorial de Juegos de Mesa Modernos",
    description: "Impulsamos la industria de juegos de mesa en la región. Distribución para tiendas, servicios de editorial, producción a medida y consultoría de alta gama.",
    type: "website",
    locale: "es_ES",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-brand-mint/30 selection:text-brand-purple">
        {children}
      </body>
    </html>
  );
}
