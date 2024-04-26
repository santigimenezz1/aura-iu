   import BotonSeccionComponente from './BotonSeccionComponente/BotonSeccionComponente'
import ComponenteCodigo from '../SeccionComponente/ComponenteCodigo/ComponenteCodigo'
import TarjetaSeccionComponente from './TarjetaSeccionComponente/TarjetaSeccionComponente'
import './seccionComponente.css'
import { useState } from 'react'
const SeccionComponente = () => {
    const [active, setActive] = useState("Basic")

    return (
        <>
        <h1 className='seccionComponente__descripcion'>Customize<span className='seccionComponente__span'> incredible</span> your components with the style you like best.</h1>
        <div className="seccionComponente">

            <div className='container__seccionComponente__tarjetas'>
            <div className='seccionComponente__tarjetas'>
            <BotonSeccionComponente text={"Basic"}  estado={active} setActive={setActive} />
            <BotonSeccionComponente text={"Modern"} estado={active}  setActive={setActive} />
            <BotonSeccionComponente text={"Retro"}  estado={active}  setActive={setActive}/>
            <BotonSeccionComponente text={"Elegant"} estado={active}  setActive={setActive} />
            </div>
            <div className='seccionComponente__componente'>
                <TarjetaSeccionComponente />
            </div>
            </div>
            <div>
                <ComponenteCodigo />
            </div>
        </div>
        </>

    )
}
export default SeccionComponente 