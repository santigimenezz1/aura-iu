 import '../SeccionTopCreadores/seccionTopCreadores.css'
import TarjetaPerfil from './TarjetaPerfil/TarjetaPerfil'
const SeccionTopCreadores = ( {seconds} ) => {
   let variable = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    return (
        <div style={{marginTop:"0px", height:"70px"}} className='container'> 
                {
                 variable.map((tarjeta)=>(
         <div className={
            seconds === 10 ? "container__creador10" :
            seconds === 15 ? "container__creador15" :
            "container__creador20"
}>                        <TarjetaPerfil />
                         </div>
                 ))
                }       
            </div>
    )
}

export default SeccionTopCreadores