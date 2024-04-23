import TarjetaFlotante from '../../TarjetaFlotante/TarjetaFlotante'
import TarjetaIframe from '../../TarjetaIframe/TarjetaIframe'
import '../ContainerTarjetasFlotantes/containerTarjetasFlotantes.css'
import ComponenteFlotante from './ComponenteFlotante/ComponenteFlotante'

const ContainerTarjetasFlotantes = ( {HTML} ) => {
    
    return (
        <div className='container__tarjetasFlotantes'>
            <h1>tarjetas flotantes</h1>
            <TarjetaFlotante componente={<ComponenteFlotante HTML={HTML}  />} />
            </div>

    )
}

export default ContainerTarjetasFlotantes