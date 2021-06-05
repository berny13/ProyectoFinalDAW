import React from "react";
import { Link } from "react-router-dom";



const Geoapi = () => {

const [geoapi1, setgeoapi1] = React.useState([]);
    
  React.useEffect(() => {
    obtenerApi()

  }, []);



  const obtenerApi = async () => {
      const dato = await fetch('https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1')
      const user = await dato.json()
      console.log(user)
      setgeoapi1(user.data)
  }
  

  return (
    <div>
      <h1 style={{textAlign: "center", color:"#d52349"}}>Restricciones Comunidades Autónomas, España</h1>
        
            {
               
                geoapi1.map(item => (
        
                    <ul  key={item.data}>
                        <Link to={`/${item.data}`} style={{color:"#252122"}}>
                        {item.CCOM}-{item.COM}
                        </Link>
                    
                    </ul>
                ))          
                }
        
    </div>
  );
};

export default Geoapi
