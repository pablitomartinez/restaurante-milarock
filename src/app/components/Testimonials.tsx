import Image from "next/image";

// Testimonios
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Las milanesas de Mila Rock son auténticas y deliciosas. Cada bocado me transporta a Argentina.",
      author: "Ana López",
      location: "La Paz, Bolivia",
    },
    {
      text: "Una experiencia culinaria única. La combinación de sabores argentinos con el toque boliviano es perfecta.",
      author: "Jorge Ramírez",
      location: "Santa Cruz, Bolivia",
    },
    {
      text: "Mila Rock ofrece las mejores milanesas que he probado. La calidad y el sabor son incomparables.",
      author: "Lucía Torres",
      location: "Cochabamba, Bolivia",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-4xl text-center mb-12 text-red-800">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-red-800">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              {/* Texto del testimonio */}
              <p className="italic mb-4">“{testimonial.text}”</p>
              {/* Autor del testimonio */}
              <p className="font-semibold">{testimonial.author}</p>
              {/* Ubicación del autor */}
              <p className="text-gray-600">{testimonial.location}</p>
              {/* Banderas */}
              <div className="flex justify-center items-center mt-4 space-x-2">
                <Image
                  src="/flags/arg.flag.png" // Asegúrate de subir esta imagen a la carpeta public
                  alt="Bandera de Argentina"
                  width={24}
                  height={16}
                  className="w-6 h-4"
                />
                <Image
                  src="/flags/bolivia.flag.png" // Asegúrate de subir esta imagen a la carpeta public
                  alt="Bandera de Bolivia"
                  width={24}
                  height={16}
                  className="w-6 h-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
