import React from "react";

const ponerFilas = () => [
  <tr>
    <td>Jorge</td>
    <td>jorge@mail.com</td>
    <td>jorge.com</td>
  </tr>,
  <tr>
    <td>Pepe</td>
    <td>pepe@mail.com</td>
    <td>pepe.com</td>
  </tr>,
];

const App = () => {
  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default App;
