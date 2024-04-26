import '../TarjetaFlotante/tarjetaFlotante.css'
  function TarjetaFlotante( {componente = "asdasd"} ) {
  return (
    <div className='flotante'>
      {componente}
    </div>
  );
}

export default TarjetaFlotante