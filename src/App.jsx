import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Playground from './components/Playground/Playground'
import SeccionTopCreadores from './components/SeccionTopCreadores/SeccionTopCreadores'
import SeccionTuDiseño from './components/SeccionTuDiseño/SeccionTuDiseño'
import FloatingDiv from './components/TarjetaFlotante/TarjetaFlotante'
import TarjetaIframe from './components/TarjetaIframe/TarjetaIframe'
import TarjetaMinimalista from './components/TarjetaMinimalista/TarjetaMinimalista'

function App() {

  return (
    <>
     <NavBar />
     <Header />
     <div style={{display:"flex", width:"100%", justifyContent:"center", gap:"15px", marginTop:"70px"}}>
     <TarjetaMinimalista text={"Rápido"} />
     <TarjetaMinimalista text={"Creativo"}/>
     <TarjetaMinimalista text={"Practica"} />
     <TarjetaMinimalista text={"Comparte"}/>
     </div>
     <div style={{marginTop:"120px"}}>
     <SeccionTuDiseño />
     </div>


     
     <div style={{marginTop:"80px", marginBottom:"60px", height:"500px", background:"black", padding:"20px", display:"flex", flexDirection:"column", gap:"40px"}}>
      <h1 className='text__contenedor' style={{color:"white", textAlign:"center"}}>Top Creators</h1>
     <SeccionTopCreadores />
     <SeccionTopCreadores />
     <SeccionTopCreadores />
     </div>

     
     </>
  )
}

export default App
