import AboutUs from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ContactForm from "./components/FormContact";
import Hero from "./components/Hero";
import LocationMap from "./components/Location";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/Whatsapp";
import MenuCatalog from "./components/MenuCatalog";

//fuente

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <MenuCatalog />
      <Features />
      <AboutUs />
      <Testimonials />
      <LocationMap />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      {/* Aquí vendrían más secciones como Catálogo de Vinos, Ubicación, etc. */}
    </main>
  );
}
