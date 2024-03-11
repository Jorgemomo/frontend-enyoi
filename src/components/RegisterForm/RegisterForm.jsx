import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { post } from "../../httprequest/httprequest";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    if (response.message === "User created sucessfully") {
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "¡Registrado correctamente!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Ocurrio un error intentalo nuevamente!",
        // footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    console.log("***************", response);
  };

  const onSubmit = (data) => {
    post(`${url}/userslog/register`, { ...data, rol: "user" }, cbResponse);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 border-2 p-5 mt-6 rounded bg-sky-100"
      >
        <h2 className="font-bold mb-3">REGISTRO DE USUARIO</h2>

        <label>Nombre completo</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("full_name", { required: true, maxLength: 200 })}
          placeholder="Nombre completo"
        />

        <label>Número de teléfono</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("phone", { required: true, maxLength: 20 })}
          placeholder="Número de teléfono"
        />

        <label>Dirección</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("address", { required: true, maxLength: 200 })}
          placeholder="Dirección"
        />

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

export default RegisterForm;
