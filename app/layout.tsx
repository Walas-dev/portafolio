import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter'
 });

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: "Williams Alas | Ingeniero de Sistemas ",
  description: "portfolio-williams-alas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={` ${jetbrainsMono.variable} ${inter.variable} ${spaceGrotesk.variable} font-body bg-background text-primary tracking-wide antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
