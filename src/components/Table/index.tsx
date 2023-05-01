import React, { useState } from "react";
import "./styles.css";

export interface ITableProps {
  data: Table[];
}

export type Table = {
  id: number;
  info: string;
};

function Table(props: ITableProps) {
  const { data } = props;
  const [info, setInfo] = useState(data);

  const handleDelete = (id: number) => {
    const newData = info.filter((item) => item.id !== id);
    setInfo(newData);
  };

  return (
    <div style={{flex: 1}}>
      <h1>React Test: Espinlabs</h1>
      
      <table className="table">
        <tbody>
          {info.map((item, i) => (
            <tr key={i}>
              <td>{`${item.id} - ${item.info}`}</td>
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
