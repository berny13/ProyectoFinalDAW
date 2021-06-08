import { Link } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";


const Andalucia = () => {
  const { COM} = useParams();
  console.log(COM);

  const [geoapi2, setgeoapi2] = React.useState([]);

  React.useEffect(() => {
    const obtenerApi = async () => {
      const dato = await fetch(
        `https://apiv1.geoapi.es/provincias?CCOM=${COM}&type=JSON&key=&sandbox=1`
      );
      const user = await dato.json();
      setgeoapi2(user);
    };
    obtenerApi();
  }, [COM]);

  return (
    <div>
    </div>
  );
};

export default Andalucia;
