import React from "react";

class Chats extends React.Component {
  render() {
    return (
   
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <h1 class="card-title">Bienvenido a Nuestro Chat</h1>
            <div id="chat-window">
              <div id="output"></div>
              <div id="actions"></div>
            </div>
            <input type="text" id="username" placeholder="Username" />
            <input type="text" id="message" placeholder="Message" />
            <button id="send">Enviar</button>
          </div>
        </div>
 
    );
  }
}
export default Chats;
