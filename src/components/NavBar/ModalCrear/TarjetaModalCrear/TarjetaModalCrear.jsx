 import '../TarjetaModalCrear/tarjetaModalCrear.css'
 import GamepadIcon from '@mui/icons-material/Gamepad';

const TarjetaModalCrear = ( {text} ) => {
    return (
        <div className="TarjetaModalCrear">
            <GamepadIcon className='tarjetaModalCrear__icono' fontSize='large' />
            <div>
                <h1 className='tarjetaModalCrear__button'>{text}</h1>
            </div>

        </div>
    )
}
export default TarjetaModalCrear