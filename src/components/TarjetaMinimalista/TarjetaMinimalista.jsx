import '../TarjetaMinimalista/tarjetaMinimalista.css'

const TarjetaMinimalista = ( {titulo, descripcion, imagen} ) => {
    return (
        <div className='tarjetaMinimalista'>
            <div className='tarjetaMinimalista__logo-titulo'>
                <img src={imagen}></img>
                <h1>{titulo}</h1>
            </div>
            <div className='tarjetaMinimalista__descripcion'>
            <h3>{descripcion}</h3>
            </div>

        </div>
    )
}

export default TarjetaMinimalista