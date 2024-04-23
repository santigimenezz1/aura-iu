import { useEffect, useState } from 'react';
import '../ComponenteFlotante/componenteFlotante.css'
const ComponenteFlotante = ({ HTML }) => {

    const [estado, setEstado] = useState()

    useEffect(()=>{
      setEstado(HTML())
    },[])

    return (
        <div className='container__tarjetaIframe'>
            <div className='container__iframe'>
         <iframe srcDoc={estado}></iframe>
            </div>
        
        </div>
    )
}
export default ComponenteFlotante