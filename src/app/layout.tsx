import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";

// 1. Importando a fonte Barlow direto do Google
import { Barlow } from "next/font/google";

// 2. Configurando pesos (400=Normal, 700=Bold, 800=ExtraBold)
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-barlow", // Criando uma variável CSS
});

export const metadata: Metadata = {
  title:
    "Ello Trucks | O seu ELLO com bons negócios e serviços para quem vive na estrada",
  description: "Compra e venda de caminhões e guia de serviços.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 3. Aplicando a fonte no corpo do site */}
      <body
        className={`${barlow.className} antialiased bg-slate-50 text-brand-gray`}
      >
        {children}
        {/* 2. Adicionamos o Componente aqui (ficará invisível até ser chamado) */}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
