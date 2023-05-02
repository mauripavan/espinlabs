import React, { useState } from "react";
import { ITableProps } from "./types";
import "./styles.css";

function Table(props: ITableProps) {
  const { data } = props;
  const [info, setInfo] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (id: number) => {
    const newData = info.filter((item) => item.id !== id);
    setInfo(newData);
  };

  const handleAdd = () => {
    const lastId = info.length > 0 ? info[info.length - 1].id : 0;

    const newItem = {
      id: lastId + 1,
      info: inputValue,
    };

    const newList = [...info];

    {
      inputValue && newList.push(newItem);
      setInfo(newList);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <h1>React Test: Espinlabs</h1>
        <div className="input-wrapper">
          <input
            placeholder="Ingrese el texto aquí"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAdd}>AGREGAR</button>
        </div>
      </div>
      <table>
        <tbody>
          {info.map((item, i) => (
            <tr key={i}>
              <td>{`${i + 1} - ${item.info}`}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>BORRAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
