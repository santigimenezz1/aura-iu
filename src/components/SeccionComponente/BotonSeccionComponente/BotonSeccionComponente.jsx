 import '../BotonSeccionComponente/botonSeccionComponente.css'
 import BrushIcon from '@mui/icons-material/Brush';

const BotonSeccionComponente = ( {text} ) => {
    
    return (
        <div className="tarjetaSeccionComponente">
            <BrushIcon className='tarjetaSeccionComponente___icon' fontSize='large'/>
            <h3 className='tarjetaSeccionComponente___titulo'>{text}</h3>
        </div>
    )
}
export default BotonSeccionComponente 