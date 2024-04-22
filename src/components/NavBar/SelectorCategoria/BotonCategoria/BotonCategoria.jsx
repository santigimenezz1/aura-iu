import '../BotonCategoria/botonCategoria.css'
const BotonCategoria = ({cantidad, text}) => {
    return (
        <div>
            <button class="cssbuttons-categoria">
  <span>{text}<h2>{cantidad}</h2></span>
</button>


        </div>
    )
}

export default BotonCategoria