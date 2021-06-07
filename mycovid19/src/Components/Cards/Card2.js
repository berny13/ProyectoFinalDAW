import React from "react";
import descarga from './descarga.jpg';

class Carta2 extends React.Component {


  render() {
    return (
      <div>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={descarga} alt="Card image cap" />
            <div class="card-body">
              <h3 class="card-title">Restricciones</h3>
              <p class="card-text">
                Haz Click en cualquier comunidad para acceder a las restricciones
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                Actualizaciones diarias de restricciones
              </small>
              <button style={{backgroundcolor:"#858484"}} onClick={this.handleClick}>Abrir Chat</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Carta2;
