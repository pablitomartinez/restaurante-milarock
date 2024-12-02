"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO  */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Bodega Don Milagro"
              width={120}
              height={30}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop */}
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Inicio", "Vinos", "Nosotros", "Ubicación", "Contacto"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* mobile  */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <AlignJustify />}
            </button>
            <div
              className={`md:hidden fixed top-16 right-0 bg-gray-900 w-full z-40 transform transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "bopacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10 pointer-events-none"
              }`}
            >
              <div className="flex flex-col items-center text-center  justify-center h-full">
                <div className="ml-10 flex flex-col space-y-4 w-full">
                  {["Inicio", "Vinos", "Nosotros", "Ubicación", "Contacto"].map(
                    (item) => (
                      <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
