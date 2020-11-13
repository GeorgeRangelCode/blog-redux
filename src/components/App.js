import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      usuarios: [
        {
          nombre: "Jorge",
          correo: "jorge@mail.com",
          enlace: "jorge.com",
        },
        {
          nombre: "Pepe",
          correo: "pepe@mail.com",
          enlace: "pepe.com",
        },
      ],
    };
  }

  ponerFilas = () =>
    this.state.usuarios.map((usuario, index) => (
      <tr key={index}>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.enlace}</td>
      </tr>
    ));

  render() {
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
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
