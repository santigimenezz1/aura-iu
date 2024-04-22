import ModalCrear from './ModalCrear/ModalCrear'
import SelectorCategoria from './SelectorCategoria/SelectorCategoria'
import '../NavBar/navBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>
           <img className='navbar__logo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713789278/ASTRO%20IO/logoo_u9ltkz.png'></img>
           <SelectorCategoria />
        </div>
    )
}
export default NavBar