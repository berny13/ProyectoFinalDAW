import React from "react";
import { useParams } from "react-router-dom";


const Andalucia = () => {
  const { data} = useParams();

  const [geoapi2, setgeoapi2] = React.useState([]);

  React.useEffect(() => {
    const obtenerApi = async () => {
      const dato = await fetch(
        `https://apiv1.geoapi.es/provincias?CCOM=${data}01&type=JSON&key=&sandbox=1`
      );
      const user = await dato.json();
      setgeoapi2(user);
    };
    obtenerApi();
  }, []);

  return (
    <div>
      <h2>{geoapi2.data}</h2>
      <h3>{geoapi2.CCOM}</h3>
    </div>
  );
};

export default Andalucia;
