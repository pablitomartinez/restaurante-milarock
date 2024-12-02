import AboutUs from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/Whatsapp";
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
      <Footer />
      <WhatsAppButton />
      {/* Aquí vendrían más secciones como Catálogo de Vinos, Ubicación, etc. */}
    </main>
  );
}
