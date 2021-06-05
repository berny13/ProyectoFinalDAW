import React from "react";
import virus from './virus.jpg';

class Carta2 extends React.Component {
  render() {
    return (
      <div>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={virus} alt="Card image cap" />
            <div class="card-body">
              <h3 class="card-title">Restricciones</h3>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                Actualizaciones diarias de restricciones
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Carta2;
