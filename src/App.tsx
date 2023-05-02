import React from "react";
import Table from "./components/Table";
import "./index.css";

function App() {
  const data = [
    {
      id: 1,
      info: "Buenos Aires",
    },
    {
      id: 2,
      info: "Cordoba",
    },
    {
      id: 3,
      info: "Misiones",
    },
  ];

  //Hacer una función en Javascript que dado un string, devuelva si el mismo es capicúa. Hacer una llamada al mismo.
  //<------------------------------------------------------------------------------>

  const capicuaCheck = (s: string) => {
    const array = s.split("").reverse();

    const stringInvertido = array.join("");

    return s === stringInvertido;
  };

  console.log('capicuaCheck ===>', capicuaCheck('reconocer'));
  //<------------------------------------------------------------------------------>

  return (
    <div className="container">
      <Table data={data} />
    </div>
  );
}

export default App;
