import React from "react";
import Table from "./components/Table";

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        minHeight: '100vh'
      }}
    >
      <Table data={data} />
    </div>
  );
}

export default App;
