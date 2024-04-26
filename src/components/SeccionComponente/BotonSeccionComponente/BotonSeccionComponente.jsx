 import '../BotonSeccionComponente/botonSeccionComponente.css'
 import BrushIcon from '@mui/icons-material/Brush';

const BotonSeccionComponente = ( {text, estado, setActive} ) => {
    
    return (
        <div className="tarjetaSeccionComponente" onClick={()=>setActive(text)}>
            <BrushIcon className={estado === text ? 'tarjetaSeccionComponente___icon' : 'tarjetaSeccionComponente___icon__active' }fontSize='large'/>
            <h3 className={estado === text ? 'tarjetaSeccionComponente___titulo' : 'tarjetaSeccionComponente___titulo__active'}>{text}</h3>
        </div>
    )
}
export default BotonSeccionComponente 