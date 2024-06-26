 import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import BotonCategoria from '../NavBar/SelectorCategoria/BotonCategoria/BotonCategoria'
import '../SeccionElements/seccionElements.css'
import BotonNextPage from './BotonNextPage/BotonNextPage'
import TarjetaElements from './TarjetaElements/TarjetaElements'
const SeccionElements = () => {
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
                        <h1>Buttons</h1>
                        <h2>Open-Source UI elements made with CSS </h2>
                    </div>
                 <div className='container__seccionElements__tarjetas__tarjetasElements'>
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
                    <TarjetaElements />
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
export default SeccionElements