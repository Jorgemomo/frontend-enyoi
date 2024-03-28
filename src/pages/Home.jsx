import React from "react";

import PrimerComponente from "../components/PrimerComponente/PrimerComponente";

import logo from "../assets/images/logo192.png";

const Home = () => {
  return (
    <div className="w-full">
      <PrimerComponente />
      <div className="w-full">
        <section className="w-full flex flex-col">
          <h2 className="mb-4 mt-11 font-bold uppercase text-center">
            El software de citas más avanzado del mercado
          </h2>
          <div className="w-full flex flex-row h-auto items-center">
            <img src={logo} alt="imagen de software" height={200} width={200} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus corporis voluptatum labore accusamus quia magni quae,
              quis fugiat vel delectus dicta sapiente vero officiis architecto
              maiores esse natus aut praesentium?
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col bg-sky-100">
          <h2 className="mb-4 mt-11 font-bold uppercase text-center">
            Revisión periódica y diagnóstico especializado
          </h2>
          <div className="w-full flex flex-row h-auto items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus corporis voluptatum labore accusamus quia magni quae,
              quis fugiat vel delectus dicta sapiente vero officiis architecto
              maiores esse natus aut praesentium?
            </p>
            <img
              src={logo}
              alt="imagen de diagnóstico"
              height={200}
              width={200}
            />
          </div>
        </section>
        <section className="w-full flex flex-col">
          <h2 className="mb-4 mt-11 font-bold uppercase text-center">
            Cuidados y alimentación para tus mascotas
          </h2>
          <div className="w-full flex flex-row h-auto items-center">
            <img
              src={logo}
              alt="imagen cuidado mascotas"
              height={200}
              width={200}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus corporis voluptatum labore accusamus quia magni quae,
              quis fugiat vel delectus dicta sapiente vero officiis architecto
              maiores esse natus aut praesentium?
            </p>
          </div>
        </section>
        <footer className="w-full flex justify-center items-center h-11 bg-sky-600 text-white ">
          <p className="text-center">Desarrollado por: Jorge Morales </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
