import React from "react";

import { useState, useEffect } from "react";

const Home = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(false);
  const [resultMulti, setResultMulti] = useState(0);

  const fnSumar = () => {
    setResult(result + 1);
  };

  const fnRestar = () => {
    setResult(result + -1);
  };

  const fnMultiplicar = () => {
    setTimeout(() => {
      setOperation(true);
    }, 3000);
  };

  useEffect(() => {
    if (operation) {
      console.log("entra useeffect");
      setResultMulti(result * 2);
    }
  }, [operation, result]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>Result: {result}</h2>
      <h2>Result multi: {resultMulti}</h2>
      <button onClick={fnSumar}>Sumar</button>
      <br></br>
      <button onClick={fnRestar}>Restar</button>
      <br></br>
      <button onClick={fnMultiplicar}>Multiplicar</button>
    </>
  );
};

export default Home;
