//iconos
import { Facebook, Instagram } from "lucide-react";
// import Image from "next/image";

import Link from "next/link";

// Pie de Página
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <p>Ruta Provincial 14, Km 5</p>
          <p>Purmamarca, Jujuy, Argentina</p>
          <p>+54 388 4123456</p>
          <p>info@bodegadonmilagro.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
          <div className="flex space-x-4">
            {/* <Link href="#" className="hover:text-red-500">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24} // Ajusta el ancho según tu imagen
                height={24} // Ajusta el alto según tu imagen
                className="h-6 w-6 text-white"
              />
            </Link> */}
            <Link href="#" className="hover:text-red-500">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <Facebook />
            </Link>
            
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul>
            <li>
              <Link href="#" className="hover:text-red-500">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-500">
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © {new Date().getFullYear()} Bodega Don Milagro. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;