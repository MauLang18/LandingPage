import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl xl:text-6xl font-bold xl:leading-[6rem]">
          Desarrollo Tecnológico a Medida: Web, Aplicaciones y Software{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
            Personalizadas
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
          Encuentra soluciones que se ajusten a tus objetivos comerciales con nuestro enfoque intuitivo y de calidad.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="hero.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <h2 className="text-[15px] font-bold tracking-[1px] text-gray-800">
            Más de 100 proyectos exitosos completados
            </h2>
            <div className="flex items-center gap-2 text-[15px] text-gray-500">
            Equipo conformado por ingenieros altamente calificados.
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src="c-sharp.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="java.jpg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-4 border-gray-100 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%] -rotate-12"
        />
        <img
          src="react.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[10%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;