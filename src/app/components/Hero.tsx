// Componente Hero

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/banner.vinos.jpg")',
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4`}>
          Bodega Don Milagro
        </h1>
        <p className="text-xl mb-8">
          Vinos artesanales de Purmamarca, Jujuy. Tradición y pasión en cada
          copa.
        </p>
        <a
          href="#vinos"
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Descubre Nuestros Vinos
        </a>
      </div>
    </section>
  );
};

export default Hero;
