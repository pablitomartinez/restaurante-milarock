// Componente de Características
// Iconos importados de Lucide para representar las características
import { Drumstick, MapPin, Star } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      // Icono representativo de calidad en comida
      icon: <Drumstick className="w-12 h-12 text-red-600" />,
      title: "Calidad Garantizada",
      description: "Ingredientes frescos y cuidadosamente seleccionados.",
    },
    {
      // Icono para resaltar la ubicación y la fusión cultural
      icon: <MapPin className="w-12 h-12 text-red-600" />,
      title: "Fusión Argentina-Boliviana",
      description:
        "Sabores auténticos argentinos adaptados al paladar boliviano.",
    },
    {
      // Icono para destacar reconocimiento o satisfacción del cliente
      icon: <Star className="w-12 h-12 text-red-600" />,
      title: "Favoritos del Cliente",
      description: "Reconocidos por su sabor y presentación impecable.",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-4xl text-center mb-12 text-red-800">
          Por Qué Elegirnos
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Mapeo de las características para mostrarlas en tarjetas */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-red-800"
            >
              {/* Ícono representativo */}
              <div className="flex justify-center mb-4">{feature.icon}</div>
              {/* Título de la característica */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {/* Descripción de la característica */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
