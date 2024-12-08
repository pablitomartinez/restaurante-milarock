import Image from "next/image";

// Sección Sobre Nosotros (Historia de Mila Rock)
const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mr-12 flex justify-center items-center">
          {/* Imagen representativa */}
          <Image
            src="/mila-rock.jpg" // Cambia la imagen al recurso relevante
            alt="Historia de Mila Rock"
            width={700} // Ajusta el ancho según tu diseño
            height={400} // Ajusta el alto según tu diseño
            className="rounded-lg shadow-lg"
            priority // Si la imagen es importante para la primera impresión
          />
        </div>
        <div className="md:w-1/2">
          {/* Título de la sección */}
          <h2 className="text-4xl mb-6 text-red-700">Nuestra Historia</h2>
          {/* Descripción de la historia */}
          <p className="text-gray-700 mb-4">
            Mila Rock nació para traer un pedacito de Argentina a Bolivia,
            fusionando la tradición de las milanesas argentinas con un toque
            local único.
          </p>
          <p className="text-gray-700 mb-4">
            Desde el primer día, nuestro compromiso ha sido ofrecer sabores
            auténticos y deliciosos, elaborados con ingredientes frescos y un
            cariño especial que se siente en cada mordisco.
          </p>
          <p className="text-gray-700">
            En Mila Rock, celebramos la unión de dos culturas: las recetas
            tradicionales argentinas y la calidez boliviana. Cada plato cuenta
            una historia de pasión, calidad y dedicación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
