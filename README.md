# Proyecto Mila Rock - Sanguchería y Vinos

Este proyecto fue creado usando **Next.js**, y está orientado a una **sanguchería** que ofrece vinos artesanales. Este README tiene como objetivo proporcionar una guía para los futuros desarrolladores que trabajen en este proyecto.

---

## 🚀 Primeros Pasos

Para empezar a trabajar en el proyecto, sigue los pasos a continuación:

### 1. Clona el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
2. Instala las dependencias
Entra en el directorio del proyecto e instala las dependencias:

bash
Copiar código
cd nombre-del-repositorio
npm install
O si prefieres usar yarn:

bash
Copiar código
yarn install
3. Ejecuta el servidor de desarrollo
Para ejecutar el servidor local y ver la aplicación, usa uno de los siguientes comandos:

bash
Copiar código
npm run dev
# o
yarn dev
# o
pnpm dev
Luego, abre tu navegador y visita http://localhost:3000 para ver el resultado.

🌟 Estructura del Proyecto
El proyecto está estructurado de la siguiente forma:

bash
Copiar código
/public
  └── /icons          # Archivos de iconos (por ejemplo, WhatsApp)
  └── /images         # Imágenes como banner, logotipo, etc.
/src
  └── /components     # Componentes reutilizables (Ej: Header, Footer, etc.)
  └── /pages          # Páginas de la aplicación (Ej: Home, Contacto, etc.)
  └── /styles         # Archivos de estilos personalizados
  └── /utils          # Funciones y utilidades
  └── /hooks          # Custom hooks de React
🛠️ Personalización del Proyecto
Para personalizar el proyecto, sigue las indicaciones:

Actualización de textos y contenidos:

Los textos de cada componente y página están definidos dentro de los archivos en la carpeta src. Asegúrate de actualizar los textos de acuerdo con el branding de Mila Rock.
Los componentes clave como el Footer, ContactForm, y AboutUs contienen ejemplos de textos que puedes reemplazar por los específicos de la sanguchería.
Configuración de imágenes:

En el directorio /public/images/ encontrarás imágenes como banners y el logo. Si deseas cambiar alguna imagen, simplemente reemplaza los archivos dentro de este directorio o actualiza las rutas correspondientes en los componentes.
Configuración de los íconos:

Los íconos para redes sociales (por ejemplo, WhatsApp, Instagram) están ubicados en la carpeta /public/icons/. Puedes sustituir estos íconos por los que prefieras.
Configura los enlaces:

WhatsApp: En el componente WhatsAppButton, actualiza el número de teléfono en el enlace https://wa.me/<numero-de-whatsapp>.
Redes Sociales: En el Footer, cambia los enlaces de las redes sociales a las correspondientes de Mila Rock.
📚 Recursos
Aquí te dejamos algunos enlaces útiles para mejorar tu experiencia y profundizar en los temas relacionados con el proyecto:

Documentación de Next.js - Aprende sobre las características y la API de Next.js.
Tutorial de Next.js - Un tutorial interactivo para aprender Next.js paso a paso.
Fontes de Google - Si decides cambiar o agregar nuevas fuentes.
🚀 Despliegue
Despliegue en Vercel
La forma más sencilla de desplegar este proyecto es a través de Vercel, plataforma creada por los desarrolladores de Next.js.

Sigue los pasos para desplegar el proyecto en la nube:

Crea una cuenta en Vercel (si no tienes una).
Conecta tu repositorio de GitHub.
Selecciona el proyecto y despliega.
¡Listo! Ahora tu proyecto estará disponible públicamente.

Para más detalles, consulta la documentación oficial de despliegue de Next.js.

⚙️ Notas Importantes
Tecnologías utilizadas:

Next.js para el desarrollo del frontend.
Tailwind CSS para los estilos (clases utilitarias).
TypeScript para la tipificación estática de JavaScript.
Lucide React para los íconos.
¿Cómo agregar un nuevo componente?:

Crea el componente dentro de src/components/ y asegúrate de importarlo y usarlo correctamente en las páginas o en otros componentes.
📝 Contribuciones
Si deseas contribuir con nuevas características, correcciones o mejoras, sigue estos pasos:

Haz un fork del proyecto.
Crea una rama para tu funcionalidad (git checkout -b feature/nueva-caracteristica).
Realiza los cambios y haz commit de ellos (git commit -m 'Añadir nueva característica').
Push a tu rama (git push origin feature/nueva-caracteristica).
Crea un Pull Request para que podamos revisar tus cambios.
📅 Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.