 import '../SeccionTopCreadores/seccionTopCreadores.css'
import TarjetaPerfil from './TarjetaPerfil/TarjetaPerfil'
const SeccionTopCreadores = () => {
   let variable = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    return (
        <div style={{marginTop:"0px", height:"70px"}} className='container'> 
            <div className='container__creador'>
                {
                 variable.map((tarjeta)=>(
                    <div className='container__creador'>
                        <TarjetaPerfil />
                         </div>
                 ))
                }       
            </div>
        </div>
    )
}

export default SeccionTopCreadores