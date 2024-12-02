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
            <a href="#" className="hover:text-red-500">
              {/* <WhatsApp /> */}
            </a>
            <a href="#" className="hover:text-red-500">
              {/* <Instagram /> */}
            </a>
            <a href="#" className="hover:text-red-500">
              {/* <Facebook /> */}
            </a>
            <a href="#" className="hover:text-red-500">
              {/* <Mail /> */}
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-red-500">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Términos y Condiciones
              </a>
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