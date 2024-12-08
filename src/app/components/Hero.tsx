// Componente Hero

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/banner.milarock.jpg")', // Cambiar a una imagen adecuada para la sanguchería
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="text-center text-white max-w-2xl px-4">
        {/* Título principal */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-4`}>Mila Rock</h1>
        {/* Descripción destacada */}
        <p className="text-xl mb-8">
          Milanesas argentinas con todo el sabor de casa, servidas en Bolivia.
        </p>
        {/* Botón principal */}
        <a
          href="#menu"
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Explora Nuestro Menú
        </a>
        {/* Detalle visual: Banderas */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <img
            src="/argentina-flag.png" // Asegúrate de subir esta imagen
            alt="Bandera de Argentina"
            width={32}
            height={24}
            className="w-8 h-6"
          />
          <img
            src="/bolivia-flag.png" // Asegúrate de subir esta imagen
            alt="Bandera de Bolivia"
            width={32}
            height={24}
            className="w-8 h-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
