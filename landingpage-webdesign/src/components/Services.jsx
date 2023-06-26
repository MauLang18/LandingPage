import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">¿Cómo podemos ayudarte?</h1>
        <p className="text-[20px] text-gray-500">
          ¡Suscríbete a nuestro boletín! Mantendremos actualizados nuestros
          últimos proyectos y disponibilidad regularmente.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Ingresa tu dirección de correo electrónico"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribir
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Desarrollo de Apps Móviles</h3>
          <p className="text-gray-500">
            Creamos aplicaciones móviles personalizadas y funcionales para
            satisfacer las necesidades específicas de tu negocio.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Desarrollo de Servicios Web</h3>
          <p className="text-gray-500">
            Diseñamos y desarrollamos servicios web robustos y escalables para
            potenciar la interacción y comunicación en línea de tu empresa.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">
            Desarrollo de Apps de Escritorio
          </h3>
          <p className="text-gray-500">
            Creamos aplicaciones de escritorio intuitivas y eficientes que
            optimizan tus procesos y brindan una experiencia de usuario
            excepcional.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">
            Diseño y desarrollo de sitios web
          </h3>
          <p className="text-gray-500">
            Creamos sitios web atractivos y modernos que representan la
            identidad de tu negocio y brindan una experiencia de usuario única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
