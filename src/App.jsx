import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Playground from './components/Playground/Playground'
import SeccionComponente from './components/SeccionComponente/SeccionComponente'
import SeccionPracticaCodigo from './components/SeccionPracticaCodigo/SeccionPracticaCodigo'
import SeccionTopCreadores from './components/SeccionTopCreadores/SeccionTopCreadores'
import SeccionTuDiseño from './components/SeccionTuDiseño/SeccionTuDiseño'
import TarjetaFlotante from './components/TarjetaFlotante/TarjetaFlotante'
import FloatingDiv from './components/TarjetaFlotante/TarjetaFlotante'
import TarjetaIframe from './components/TarjetaIframe/TarjetaIframe'
import TarjetaMinimalista from './components/TarjetaMinimalista/TarjetaMinimalista'

function App() {

  return (
    <>
     <NavBar />
     <Header />
     <div style={{display:"flex", width:"100%", justifyContent:"center", gap:"15px", marginTop:"70px"}}>
     <TarjetaMinimalista titulo={"Fast"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1714141662/ASTRO%20IO/ligero_ope4uf.png"} descripcion={"Built on top of CSS, which means no runtime styles, and no unnecessary classes in your bundle."} />
     <TarjetaMinimalista titulo={"Creative"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1714141662/ASTRO%20IO/creatividad-2_ovblky.png"} descripcion={"Deploy all your creativity and be inspired by this wonderful community"}/>
     <TarjetaMinimalista titulo={"Practice"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1714141662/ASTRO%20IO/lapiz_lktmpa.png"} descripcion={"Practice a lot and improve your programming logic with this wonderful tool"}/>
     <TarjetaMinimalista titulo={"Share"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1714141662/ASTRO%20IO/valor_vjpqkm.png"} descripcion={"Share your wonderful creations and use the creations of the Aura community as inspiration :)"}/>
     </div>
     <div style={{marginTop:"120px"}}>
     <SeccionTuDiseño />
     </div>
     <div style={{marginTop:"80px", marginBottom:"60px", height:"500px", background:"black", padding:"20px", display:"flex", flexDirection:"column", gap:"40px"}}>
      <h1 className='text__contenedor' style={{color:"white", textAlign:"center"}}>Top Creators</h1>
     <SeccionTopCreadores seconds={10}/>
     <SeccionTopCreadores seconds={15} />
     <SeccionTopCreadores seconds={20}/>
     </div>
     <SeccionComponente />
     <SeccionPracticaCodigo />
     <Footer />
     
     </>
  )
}

export default App
