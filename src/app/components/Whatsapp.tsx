import Image from "next/image";
import Link from "next/link";

// Información de WhatsApp
const whatsapp = {
  name: "whatsapp",
  icon: "/icons/whatsapp.svg", // Si usas un icono diferente, cámbialo aquí
  href: "https://wa.me/+59121234567", // Cambiar número por el real de Mila Rock
};

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all z-50 animate-bounce">
      <Link
        key={whatsapp.name}
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-75 transition"
      >
        <Image
          src={whatsapp.icon}
          alt="WhatsApp"
          width={24} // Ajusta el ancho según tu imagen
          height={24} // Ajusta el alto según tu imagen
          className="h-6 w-6"
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
