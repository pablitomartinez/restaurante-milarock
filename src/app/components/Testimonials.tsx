// Testimonios
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Los vinos de Don Milagro son simplemente extraordinarios. Cada sorbo es un viaje por Jujuy.",
      author: "María Fernández",
      location: "Buenos Aires",
    },
    {
      text: "Una bodega que captura la magia de la Quebrada. Sus vinos reflejan una autenticidad incomparable.",
      author: "Carlos Martínez",
      location: "Mendoza",
    },
    {
      text: "Descubrí los mejores vinos artesanales de Argentina. Don Milagro es una joya escondida.",
      author: "Laura González",
      location: "Córdoba",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-red-800 ">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-red-800 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <p className="italic mb-4">`&quot;`{testimonial.text}`&ldquo;`</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials