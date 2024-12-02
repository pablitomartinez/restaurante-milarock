import Image from "next/image";

// Nueva Sección Sobre la Bodega
const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2  mb-8 md:mr-12 flex justify-center items-center">
          {/* <img
            src="/banner.vinos.jpg"
            alt="Historia de Bodega Don Milagro"
            className="rounded-lg shadow-lg"
          /> */}
          <Image
            src="/banner.vinos.jpg"
            alt="Historia de Bodega Don Milagro"
            width={700} // Ajusta el ancho según tu diseño
            height={400} // Ajusta el alto según tu diseño
            className="rounded-lg shadow-lg"
            priority // Si la imagen es importante para la primera impresión
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl mb-6 text-red-700">
            Nuestra Historia
          </h2>
          <p className="text-gray-700 mb-4">
            Fundada en 2005 en las tierras ancestrales de Purmamarca, Bodega Don
            Milagro nace del sueño de la familia Rodríguez de preservar la
            tradición vitivinícola de Jujuy.
          </p>
          <p className="text-gray-700 mb-4">
            Nuestra filosofía se basa en el respeto por la tierra, la vid y las
            técnicas artesanales transmitidas por generaciones. Cada botella
            cuenta una historia de pasión, territorio y dedicación.
          </p>
          <p className="text-gray-700">
            Producimos vinos de edición limitada, cuidando cada detalle desde la
            vid hasta la copa, para ofrecer una experiencia única que refleja la
            riqueza de nuestros viñedos andinos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs