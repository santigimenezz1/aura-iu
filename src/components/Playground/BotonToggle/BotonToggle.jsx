import '../BotonToggle/botonToggle.css'

const ButonToggle = ({text, img}) => {
    return (
<button className="cssbuttons-io">
  <span>
    <div className='container__logo__titulo'>
    <img className='logo' src={img}></img>
    </div>
      {text}
    </span>
</button>

    )
}

export default ButonToggle