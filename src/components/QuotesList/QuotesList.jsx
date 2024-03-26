import React from "react";

const QuotesList = (props) => {
  const { quotesList } = props;

  // console.log(quotesList);

  return (
    <div className="ml-8 w-3/4">
      <h2 className="font-bold mb-7">CITAS PENDIENTES</h2>
      <div className="w-full mt-6 flex flex-wrap">
        {quotesList.map((quote, index) => (
          <div
            key={index}
            className="flex w-70 flex-col justify-start bg-slate-50 border-2 p-5 mb-3 mx-3"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesList;
