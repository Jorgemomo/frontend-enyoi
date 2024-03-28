import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { postAuth } from "../../httprequest/httprequest";

const PetsForm = (props) => {
  const { getData, userList } = props;
  const { register, handleSubmit } = useForm();

  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    if (response.protocol41 === true) {
      getData();

      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "¡Se registró cita correctamente!",
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

    // console.log("***************", response);
  };

  const onSubmit = (data) => {
    postAuth(`${url}/quotes/create`, { ...data, rol: "user" }, cbResponse);
  };

  // console.log(petsList);

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 border-2 p-5 mt-6 rounded bg-sky-100"
      >
        <h2 className="font-bold mb-3">CREAR MASCOTA</h2>

        <label>Dueño</label>
        <select {...register("id_pet")}>
          {userList.map((pet, index) => (
            <option key={index} value={pet.id}>
              {pet.full_name}
            </option>
          ))}
        </select>

        <label>Nombre</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("name", { required: true, maxLength: 200 })}
          placeholder="Nombre mascota"
        />
        <label>Tipo</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("type", { required: true, maxLength: 20 })}
          placeholder="Tipo de mascota"
        />
        <label>Raza</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("race", { required: true, maxLength: 200 })}
          placeholder="Raza de la mascota"
        />
        <label>Edad</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("age", { required: true, maxLength: 200 })}
          placeholder="Edad de la mascota"
        />
        <label>Peso</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("weight", { required: true, maxLength: 200 })}
          placeholder="Peso de la mascota"
        />

        <input
          className="border-2 border-gray-500 row-span-2 h-12 mt-5 mb-5 cursor-pointer w-28 mx-auto rounded-lg bg-sky-200 shadow-md hover:shadow-indigo-500 pointer-events-auto"
          type="submit"
          value="Crear mascota"
        />
      </form>
    </div>
  );
};

export default PetsForm;
