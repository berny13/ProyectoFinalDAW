import React from 'react'
import { useParams } from 'react-router-dom'

const Andalucia = () => {

    
    console.log(useParams );
    const {CCOM} = useParams()


    const [geoapi2, setgeoapi2] = React.useState([]);
    
  React.useEffect(() => {

    const obtenerApi = async () => {
        const dato = await fetch(`https://apiv1.geoapi.es/provincias?${CCOM}&type=JSON&key=&sandbox=1`)
        const user = await dato.json()
        console.log(user)
        setgeoapi2(user)
    }
    obtenerApi()

  }, [CCOM]);




    return(
        <div>
            <h3>{geoapi2.CCOM}OTRA</h3>
            <p></p>
        </div>
    )
}

export default Andalucia