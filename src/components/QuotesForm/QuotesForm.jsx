import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { postAuth } from "../../httprequest/httprequest";

const QuotesForm = (props) => {
  const { getData, petsList } = props;
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
    <div className="flex justify-center items-center h-full ml-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 border-2 p-5 mt-6 rounded bg-sky-100"
      >
        <h2 className="font-bold mb-3">CREAR CITA</h2>
        <label></label>Fecha
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("date", { required: true, maxLength: 200 })}
          placeholder="Fecha de cita"
        />
        <label>Hora</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("hour", { required: true, maxLength: 20 })}
          placeholder="Hora de cita"
        />
        <label>Doctor</label>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
          {...register("doctor", { required: true, maxLength: 200 })}
          placeholder="Doctor tratante"
        />
        <label>Mascota</label>
        <select {...register("id_pet")}>
          {petsList.map((pet, index) => (
            <option key={index} value={pet.id}>
              {pet.name}
            </option>
          ))}
          {/* <option value={1}>Chepeto</option>
          <option value={2}>Copito</option>
          <option value={3}>Zoe</option> */}
        </select>
        <input
          className="border-2 border-gray-500 row-span-2 h-12 mt-5 mb-5 p-2 cursor-pointer w-28 mx-auto rounded-lg bg-sky-200 shadow-md hover:shadow-indigo-500 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default QuotesForm;
