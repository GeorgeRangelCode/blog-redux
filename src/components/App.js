import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

const Tareas = () => (
  <div>
    <h1>Tareas</h1>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
    </BrowserRouter>
  );
};

export default App;
