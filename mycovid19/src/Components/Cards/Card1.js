import React from "react";
import Geoapi from "../datosAPI/geoAPI";

class Carta1 extends React.Component {
  render() {
    return (
      <div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title" textAlign="center">
                Comunidades
              </h3>
              <p class="card-text">
                <Geoapi></Geoapi>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Carta1;
