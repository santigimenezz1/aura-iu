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
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 <button>Cards</button>
                 </div>
                 <div className='container__general__tarjetas'>
                    <div className='container__general__tarjetas__filtros'>
                        <h1>Browse All</h1>
                        <h2>Open-Source UI elements made with CSS </h2>
                        <div className='filtros__elements'>
                            <h4>estos van a ser los filtros</h4>
                        </div>
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