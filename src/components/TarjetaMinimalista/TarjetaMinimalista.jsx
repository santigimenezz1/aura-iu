import '../TarjetaMinimalista/tarjetaMinimalista.css'

const TarjetaMinimalista = ( {text} ) => {
    return (
        <div className='tarjetaMinimalista'>
            <div className='tarjetaMinimalista__logo-titulo'>
                <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713954951/ASTRO%20IO/creatividad_ajxkkq.png'></img>
                <h1>{text}</h1>
            </div>
            <div className='tarjetaMinimalista__descripcion'>
            <h3>Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme. </h3>
            </div>

        </div>
    )
}

export default TarjetaMinimalista