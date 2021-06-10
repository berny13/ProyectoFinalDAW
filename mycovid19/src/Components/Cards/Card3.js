import React from "react";
import './main.css'
import "bootstrap/dist/css/bootstrap.min.css";

class Carta3 extends React.Component {
  render() {
    return (
      <div>
        <div class="card bg-light text-white mb-3">
          <img class="card-img" src="..." alt="Card image" />
          <h1 style={{ textAlign: "center", color: "#d52349" }}>Bienvenido a nuestro Chat</h1>
          <div id="chat-container">
            <div id="chat-window">
              <div id="output"></div>
              <div id="actions"></div>
            </div>
            <input type="text" id="username" placeholder="Username" />
            <input type="text" id="message" placeholder="Message" />
            <button id="send">Enviar</button>
          </div>

          <script src="/socket.io/socket.io.js"></script>
          <script src="chat.js"></script>
        </div>
      </div>
    );
  }
}
export default Carta3;
