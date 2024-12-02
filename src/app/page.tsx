import AboutUs from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WineCatalog from "./components/WinesCatalog";


//fuente

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <WineCatalog />
      <Testimonials />
      {/* Aquí vendrían más secciones como Catálogo de Vinos, Ubicación, etc. */}
    </main>
  );
}
