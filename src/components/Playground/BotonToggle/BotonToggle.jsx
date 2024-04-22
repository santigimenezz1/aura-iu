import { useState } from 'react'
import '../BotonToggle/botonToggle.css'

const ButonToggle = ({text, img, focus}) => {

  
    return (
<button className={focus ? "cssbuttons-io" : "cssbuttons-io-on"}>
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