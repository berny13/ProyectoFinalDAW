import React from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';
import Andalucia from "../ComunidadesAutonomas/Comunidades";
import "bootstrap/dist/css/bootstrap.min.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Geoapi = () => {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const AbrirProvincia = () => {
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [geoapi1, setgeoapi1] = React.useState([]);

  React.useEffect(() => {
    obtenerApi();
  }, []);

  const obtenerApi = async () => {
    const dato = await fetch(
      "https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1"
    );
    const user = await dato.json();
    console.log(user);
    setgeoapi1(user.data);
  };

  return (
    <div>
      {geoapi1.map((item) => (
        <ul key={item.data}>
          <Link to={`/${item.COM}`} style={{ color: "#252122" }} variant="outlined" color="primary" onClick={handleClickOpen}>
            {item.CCOM}-{item.COM}
          </Link>
      <Dialog
       open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        class="bg-light"
      >
        <DialogTitle id="alert-dialog-title">
          <Andalucia key={item.data}>{item.COM}</Andalucia>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
             Cerrar
          </Button>
        </DialogActions>
      </Dialog>
        </ul>
      ))}


    </div>
  );
};

export default Geoapi;
