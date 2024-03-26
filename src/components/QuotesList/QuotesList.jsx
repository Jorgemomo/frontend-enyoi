import React from "react";
import { deleteQuote } from "../../httprequest/httprequest";
import Swal from "sweetalert2";

const QuotesList = (props) => {
  const { quotesList, getData } = props;

  const url = process.env.REACT_APP_API_BASE_URL;

  // console.log(quotesList);

  const cbResponse = (response) => {
    if (response === "Quote deleted successfully") {
      getData();

      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "¡Cita eliminada correctamente",
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

  const fnDeleteQuote = (id) => {
    deleteQuote(`${url}/quotes/delete/${id}`, cbResponse);
  };

  return (
    <div className="ml-8 w-3/4">
      <h2 className="font-bold mb-7">CITAS PENDIENTES</h2>
      <div className="w-full mt-6 flex flex-wrap">
        {quotesList.length &&
          quotesList.map((quote, index) => (
            <div
              key={index}
              className="flex w-70 flex-col justify-start bg-slate-50 border-2 p-5 mb-3 mx-3 rounded"
            >
              <div>
                <strong>Nombre de la mascota: </strong> {quote.name}
              </div>
              <div>
                <strong>Fecha: </strong> {quote.date}
              </div>
              <div>
                <strong>Doctor: </strong> {quote.doctor}
              </div>
              <div>
                <strong>Hora: </strong> {quote.hour}
              </div>
              <button
                className="bg-red-400 text-white mt-3 rounded hover:bg-red-600"
                onClick={() => fnDeleteQuote(quote.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuotesList;
