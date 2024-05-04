import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import Playground from '../../Playground/Playground'
import SeccionTuDiseño from '../../SeccionTuDiseño/SeccionTuDiseño'
import TarjetaIframe from '../../TarjetaIframe/TarjetaIframe'
import BotonNextPage from '../BotonNextPage/BotonNextPage'
import '../SeccionDetalleElements/seccionDetalleElements.css'
import TarjetaElements from '../TarjetaElements/TarjetaElements'
const SeccionDetalleElements = () => {
    return (
        <div className="seccionElements">
                 <NavBar/>
                 <section className='container__seccionElements__tarjetas'>
                 <div className='container__seccionElements__tarjetas__navegacion'>
                 <button>All</button>
                 <button>Buttons</button>
                 <button>CheckBoxes</button>
                 <button>Toggle</button>
                 <button>Cards</button>
                 <button>Loaders</button>
                 <button>Inputs</button>
                 <button>Radio buttons</button>
                 <button>Forms</button>
                 <button>Patterns</button>
                 <button>Tooltips</button>
                 </div>
                 <div className='container__general__tarjetas'>
                    <div className='container__general__tarjetas__filtros'>
                        <div className='container__nombreDetalle'>
                        <button className='boton__back'>Volver</button>
                        <h2>Nombre del componente</h2>
                        </div>
                    </div>
                 <div className='container__seccionElements__tarjetas__tarjetasElements'>
                  <Playground />

                 </div>
                 </div>
                 </section>
                 <div className='container__botonNext'>
                 <BotonNextPage />
                 </div>
                 <Footer />
               


        </div>
    )
}
export default SeccionDetalleElements