import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeuralMeshBackground from "@/components/NeuralMeshBackground";
import ScrollReveal from "@/components/ScrollReveal";
import SoundProvider from "@/components/SoundProvider";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-headline", // Tying to custom tailwind vars
  display: "swap" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"], 
  variable: "--font-label",
  display: "swap" 
});

// Use both variable setups so they inject properly.
export const metadata = {
  title: "Celestial.Dev - Portfolio",
  description: "Agentic AI Architect Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen">
        <SoundProvider>
          <NeuralMeshBackground />
          <Navbar />
          {children}
          <Footer />
          <ScrollReveal />
        </SoundProvider>
      </body>
    </html>
  );
}
