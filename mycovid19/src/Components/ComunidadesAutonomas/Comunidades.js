import { Link } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";

const Andalucia = () => {
  const { COM } = useParams();
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
  }, []);

  return (
    <div>
      <h1>{COM}</h1>
      <p>
        Toque de queda: No Movilidad: Se mantienen cierres en localidades que
        pasen de 500 de incidencia acumulada*
        <p>
          Reunión: Sin límites en las reuniones sociales Comercio y
          restauración: Hasta la 1.00 y máximo de 10
        </p>
      </p>
      <p>personas Incidencia**: 96</p>
    </div>
  );
};

export default Andalucia;
