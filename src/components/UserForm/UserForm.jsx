import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { post, deleteService, updateUser } from "../../httprequest/httprequest";
import Swal from "sweetalert2";

const UserForm = (props) => {
  const { userList, getData } = props;
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState(null);

  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    if (response.message === "User created sucessfully") {
      getData();

      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "¡Has creado el usuario correctamente!",
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
    post(`${url}/userslog/register`, { ...data, rol: "user" }, cbResponse);
  };

  const cbResponseFromDeleteUser = (response) => {
    if (response === "User deleted successfully") {
      getData();

      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "¡Usuario eliminado correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (response === "User updated successfully") {
      setUser(null);
      getData();

      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "¡Usuario modificado correctamente",
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
  };

  const fnDeleteUser = (id) => {
    deleteService(`${url}/users/delete/${id}`, cbResponseFromDeleteUser);
  };

  const fnOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fnUpdateUser = () => {
    updateUser(`${url}/users/update/`, user, cbResponseFromDeleteUser);
  };

  // console.log(user);
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {user !== null ? (
        <form className="flex flex-col w-80 border-2 p-5 mt-6 rounded bg-lime-50">
          <h2 className="font-bold mb-3">ACTUALIZAR USUARIO</h2>

          <label>Nombre completo</label>
          <input
            className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
            placeholder="Nombre completo"
            name="full_name"
            value={user.full_name}
            onChange={(e) => fnOnchange(e)}
          />

          <label>Número de teléfono</label>
          <input
            className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
            placeholder="Número de teléfono"
            name="phone"
            value={user.phone}
            onChange={(e) => fnOnchange(e)}
          />

          <label>Dirección</label>
          <input
            className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
            placeholder="Dirección"
            name="address"
            value={user.address}
            onChange={(e) => fnOnchange(e)}
          />

          <label>Correo</label>
          <input
            className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={user.email}
            onChange={(e) => fnOnchange(e)}
          />

          <label>Contraseña</label>
          <input
            className="border-2 border-gray-500 row-span-2 h-12 mb-5 p-2 rounded"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={user.password}
            onChange={(e) => fnOnchange(e)}
          />
          <input
            className="border-2 border-gray-500 row-span-2 h-12 mb-5 cursor-pointer w-36 mx-auto rounded-lg bg-sky-200 shadow-md hover:shadow-indigo-500 pointer-events-auto"
            type="button"
            value="Actualizar usuario"
            onClick={fnUpdateUser}
          />
        </form>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-80 border-2 p-5 mt-6 rounded bg-sky-100"
        >
          <h2 className="font-bold mb-3">CREAR USUARIO</h2>

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
            value="Crear usuario"
          />
        </form>
      )}

      <div className="my-10">
        {userList.map((user, index) => (
          <div key={index} className="flex flex-row w-full justify-between">
            <p className="text-xs mx-2">{user.full_name}</p>
            <p className="text-xs mx-2">{user.phone}</p>
            <p className="text-xs mx-2">{user.address}</p>
            <p className="text-xs mx-2">{user.email}</p>

            <div className="flex flex-row">
              <button
                className="bg-green-800 text-white mx-3 my-2 p-1 text-xs rounded"
                onClick={() => setUser(user)}
              >
                Editar
              </button>

              <button
                className="bg-red-600 text-white mx-3 my-2 p-1 text-xs rounded"
                onClick={() => fnDeleteUser(user.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserForm;
