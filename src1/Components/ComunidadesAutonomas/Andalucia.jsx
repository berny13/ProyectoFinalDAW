import React from 'react'
import { useParams } from 'react-router-dom'

const Andalucia1 = () => {

    
    //console.log(useParams );
    const {data} = useParams()
    const [geoapi2, setgeoapi2] = React.useState([]);
    
  React.useEffect(() => {
    obtenerApi2()

  }, []);



  const obtenerApi2 = async () => {
      const dato = await fetch(`https://apiv1.geoapi.es/provincias?${CCOM}&type=JSON&key=&sandbox=1`)
      const user = await dato.json()
      console.log(user)
      setgeoapi2(user)
  }


    return(
        <div>
            <h3>{geoapi2.CCOM}</h3>
        </div>
    )
}

export default Andalucia1