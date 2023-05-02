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


  return (
    <div className="container">
      <Table data={data} />
    </div>
  );
}

export default App;
