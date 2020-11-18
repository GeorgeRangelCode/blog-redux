import React, { Component } from "react";

class Publicaciones extends Component {
  render() {
    return (
      <div>
        <h1>Publicaciones {this.props.match.params.key}</h1>
      </div>
    );
  }
}

export default Publicaciones;
