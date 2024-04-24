import Playground from '../Playground/Playground'
import '../SeccionTuDiseño/seccionTuDiseño.css'

const SeccionTuDiseño = () => {
    return (
        <div className="seccionTuDiseño">
            <div className='seccionTuDiseño__descripcion'>
                <h1>Create<span> incredible</span> designs and share your talent with the Aura community</h1>
                </div>
                <div className='seccionTuDiseño__playground'>
                    <Playground />

                </div>

        </div>
    )
}

export default SeccionTuDiseño