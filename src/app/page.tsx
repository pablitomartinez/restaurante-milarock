import AboutUs from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


//fuente

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      {/* Aquí vendrían más secciones como Catálogo de Vinos, Ubicación, etc. */}
    </main>
  );
}
