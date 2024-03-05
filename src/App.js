import "./assets/css/App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const fnSumar = () => {
    setResult(result + 1);
  };

  const fnRestar = () => {
    setResult(result + -1);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>Result: {result}</h2>
      <button onClick={fnSumar}>Sumar</button>
      <br></br>
      <button onClick={fnRestar}>Restar</button>
    </div>
  );
}

export default App;
