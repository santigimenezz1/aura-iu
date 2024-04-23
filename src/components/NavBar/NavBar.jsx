import ModalCrear from './ModalCrear/ModalCrear'
import SelectorCategoria from './SelectorCategoria/SelectorCategoria'
import '../NavBar/navBar.css'
import Test from '../TarjetaFlotante/TarjetaFlotante'
import TarjetaModalCrear from './ModalCrear/TarjetaModalCrear/TarjetaModalCrear'
import TarjetaIframe from '../TarjetaIframe/TarjetaIframe'
import { Avatar } from '@mui/material'


const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='container__navBar__logo'>
           <img className='navbar__logo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713912846/ASTRO%20IO/logo-png-XGWSYHKJ_rai2yk.png'></img>
           <div style={{display:"flex"}}>
           <SelectorCategoria />
           <SelectorCategoria />
           <SelectorCategoria />
           </div>

            </div>
            <div className='container__navBar__perfil'>
           <ModalCrear />
           <h1>Santiago Gimenez</h1>
           <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713913786/ASTRO%20IO/WhatsApp_Image_2024-03-23_at_22.41.37_czvfmr.jpg" />

            </div>
        </div>
    )
}
export default NavBar