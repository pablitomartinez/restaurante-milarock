// Componente de Características
//lucides
import { Wine, MapPin, Trophy } from "lucide-react";


const Features: React.FC = () => {
  const features = [
    {
      icon: <Wine className="w-12 h-12 text-red-600" />,
      title: "Vinos Artesanales",
      description: "Producción limitada, elaboración cuidadosa y tradicional.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-red-600" />,
      title: "Terroir Único",
      description:
        "Viñedos en las alturas de Jujuy, con suelos y clima incomparables.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-red-600" />,
      title: "Calidad Premium",
      description: "Reconocimientos internacionales por nuestra excelencia.",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-red-800">
          Por Qué Elegirnos
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-red-800 "
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;