import { useState } from 'react'
import '../BotonToggle/botonToggle.css'

const ButonToggle = ({text, img, focus}) => {

  
    return (
<button className={focus ? "cssbuttons-io" : "cssbuttons-io-on"}>
  <span>
    <div className='container__logo__titulo'>
    <img className='logo__crear' src={img}></img>
    </div>
    <div style={{color:"white"}}>
      {text}
    </div>
    </span>
</button>

    )
}

export default ButonToggle