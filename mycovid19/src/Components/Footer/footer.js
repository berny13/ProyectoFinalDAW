import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Footeri extends React.Component {
  render() {
    return (
      <div>
        <footer class="bg-light text-center text-lg-start">
          <div class="container p-4 pb-0">
          </div>
          <div
            class="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.87)'}}>
           
            <a class="text-white">
            © 2021 Copyright: Berny Jiménez Sánchez
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footeri;
