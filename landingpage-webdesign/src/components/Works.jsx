import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Desarrollamos soluciones digitales de excelencia
        </h1>
        <p className="text-xl text-gray-500">
          Llevando soluciones de software personalizado al mundo con los mejores
          expertos, brindando ayuda a través del conocimiento.
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="sistema4.png"
            className="w-full h-auto object-cover rounded-3xl"
            alt="Landing Page"
          />
          <p className="text-gray-500">Desarrollado - junio de 2023</p>
          <h3 className="text-2xl font-bold">Landing Page</h3>
          <p className="text-gray-500">
            Encuentra soluciones que se ajusten a tus objetivos comerciales con
            nuestro enfoque intuitivo y de calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="sistema11.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt="Sistema de ahorro y de ventas de bazar"
            />
            <p className="text-gray-500">Desarrollado - septiembre de 2021</p>
            <h3 className="text-2xl font-bold">
              Sistema de ahorro y de ventas de bazar
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="sistema2.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt="Aplicación para el seguimiento de diversos trámites"
            />
            <p className="text-gray-500">Desarrollado - diciembre de 2022</p>
            <h3 className="text-2xl font-bold">
              Aplicación para el seguimiento de diversos trámites
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="sistema3.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt="Sistema de inventarios, con creación de boletas"
            />
            <p className="text-gray-500">Desarrollado - mayo de 2023</p>
            <h3 className="text-2xl font-bold">
              Sistema de inventarios, con creación de boletas
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="sistema5.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt="Aplicación para la asignación de guardias para un hospital"
            />
            <p className="text-gray-500">Desarrollado - marzo de 2023</p>
            <h3 className="text-2xl font-bold">
              Aplicación para la asignación de guardias para un hospital
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
