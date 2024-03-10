import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { post } from "../../httprequest/httprequest";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    console.log("***********", response);
    if (
      response === "EL usuario no existe" ||
      response === "El password  es incorrecto"
    ) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "¡Ocurrio un error, revisa tu usuario y/o contraseña!",
        timer: 2000,
        // footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      localStorage.setItem("userInfo", JSON.stringify(response));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Ingresaste correctamente!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const onSubmit = (data) => {
    post(`${url}/userslog/auth`, data, cbResponse);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 border-2 p-5 mt-6 rounded bg-sky-100"
      >
        <h2 className="font-bold mb-3">INICIO DE SESIÓN</h2>

        <label>Correo</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          type="email"
          {...register("email", { required: true, maxLength: 200 })}
          placeholder="Correo electrónico"
        />

        <label>Contraseña</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          type="password"
          {...register("password", { required: true, maxLength: 200 })}
          placeholder="Contraseña"
        />
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 cursor-pointer w-28 mx-auto rounded-lg bg-sky-200 shadow-md hover:shadow-indigo-500 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default LoginForm;
