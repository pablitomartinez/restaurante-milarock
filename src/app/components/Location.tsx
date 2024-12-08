import React from "react";
import { MapPin } from "lucide-react";

const LocationMap: React.FC = () => {
  return (
    <section id="ubicación" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {/* Título de la sección */}
          <h2 className="text-4xl mb-4 text-red-800">Nuestra Ubicación</h2>
          <p className="text-red-900 max-w-2xl mx-auto">
            Mila Rock te espera en el corazón de La Paz, Bolivia, para ofrecerte
            las mejores milanesas argentinas en un ambiente único.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Información de Contacto */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <MapPin className="mr-3 text-red-600" size={24} />
              <h3 className="text-xl font-semibold text-red-800">Dirección</h3>
            </div>
            {/* Dirección de Mila Rock */}
            <p className="mb-4 text-red-800">
              Av. Principal 1234, Zona Sur
              <br />
              La Paz, Bolivia
            </p>

            {/* Coordenadas */}
            <div className="mt-6 text-red-800">
              <h4 className="font-semibold mb-2">Coordenadas</h4>
              <p>Latitud: -16.4897° S</p>
              <p>Longitud: -68.1193° O</p>
            </div>
          </div>

          {/* Mapa Embebido */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7926160841764!2d-68.121441!3d-16.489689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf3053d5f1f7%3A0xe91bfe8d78c6ef87!2sZona%20Sur%2C%20La%20Paz%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1701583412345"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Botón para móviles */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://goo.gl/maps/linkDeMilaRock"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
