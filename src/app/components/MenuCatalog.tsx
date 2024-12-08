import Image from "next/image";

const MenuCatalog: React.FC = () => {
  const milanesas = [
    {
      name: "Milanesa Clásica",
      type: "Tradicional",
      description:
        "Una milanesa crocante y jugosa, preparada con la receta clásica argentina.",
      image: "/comidas/milanesa1.jpg",
      details: [
        "Acompañamientos: Papas fritas o ensalada",
        "Salsas: Mayonesa, Ketchup, Mostaza",
        "Tamaño: Grande",
      ],
    },
    {
      name: "Milanesa Napolitana",
      type: "Con Salsa y Queso",
      description:
        "Nuestra versión de la napolitana: milanesa cubierta con salsa de tomate, jamón y queso derretido.",
      image: "/comidas/mila-napolitana.jpg",
      details: [
        "Acompañamientos: Papas fritas o ensalada",
        "Extras: Huevo frito, Doble queso",
        "Tamaño: Grande",
      ],
    },
    {
      name: "Milanesa Especial",
      type: "Chef's Choice",
      description:
        "Una creación única con ingredientes frescos, ideal para quienes buscan sabores especiales.",
      image: "/comidas/milanesa-esp.jpg",
      details: [
        "Acompañamientos: Papas fritas o puré",
        "Extras: Bacon, Palta, Cebolla caramelizada",
        "Tamaño: Grande",
      ],
    },
  ];

  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-red-800">
          Nuestro Menú
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {milanesas.map((milanesa, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all text-red-800"
            >
              <Image
                src={milanesa.image} // Cambiar a imágenes de las milanesas
                alt={milanesa.name}
                width={200} // Cambia al tamaño adecuado
                height={200} // Cambia al tamaño adecuado
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{milanesa.name}</h3>
                <p className="text-gray-600 mb-4">{milanesa.type}</p>
                <p className="text-gray-700 mb-4">{milanesa.description}</p>
                <div className="border-t pt-4">
                  {milanesa.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCatalog;
