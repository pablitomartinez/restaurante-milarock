const WineCatalog: React.FC = () => {
  const wines = [
    {
      name: "Pueblo Rojo",
      type: "Tinto Reserva",
      description:
        "Un vino intenso que captura la esencia de los suelos rojos de Purmamarca. Notas de frutos maduros y especias.",
      image: "vino.pueblo.rojo.jpeg",
      details: [
        "Uvas: Malbec",
        "Crianza: 12 meses en roble",
        "Graduación: 14.5%",
      ],
    },
    {
      name: "Carnaval Tinto",
      type: "Blend Edición Especial",
      description:
        "Celebrando la riqueza cultural de Jujuy. Un blend vibrante con personalidad única.",
      image: "vino.tinto.ligero.jpeg",
      details: [
        "Uvas: Malbec, Cabernet",
        "Crianza: 8 meses en roble",
        "Graduación: 13.8%",
      ],
    },
    {
      name: "Carnaval Blanco",
      type: "Vino Blanco",
      description:
        "Fresco y aromático, inspirado en los colores luminosos de la Quebrada de Humahuaca.",
      image: "vino.blanco.jpg",
      details: ["Uvas: Torrontés", "Sin crianza", "Graduación: 12.5%"],
    },
  ];

  return (
    <section id="vinos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">
          Nuestros Vinos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {wines.map((wine, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{wine.name}</h3>
                <p className="text-gray-600 mb-4">{wine.type}</p>
                <p className="text-gray-700 mb-4">{wine.description}</p>
                <div className="border-t pt-4">
                  {wine.details.map((detail, i) => (
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


export default WineCatalog;