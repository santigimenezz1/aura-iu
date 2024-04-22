import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalCrear/modalCrear.css'
import '../ModalCrear/modalCrear.css'
import TarjetaModalCrear from './TarjetaModalCrear/TarjetaModalCrear';
import ClearIcon from '@mui/icons-material/Clear';


export default function ModalCrear() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
         <button onClick={handleOpen} class="btn"><i class="animation"></i>Create<i class="animation"></i>
    </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <section className='ModalCrear' >
          <div className='modalCrear__exit' onClick={()=>handleClose()}>
          <ClearIcon style={{color:"white"}} fontSize='large' />
          </div>
          <h1 className='modal__titulo'>What are you making ?</h1>
          <div className='container__tarjetaModalCrear'>
            <div><TarjetaModalCrear text={"Buttons"} /></div>
            <div><TarjetaModalCrear text={"Cards"} /></div>
            <div><TarjetaModalCrear text={"Inputs"} /></div>
            <div><TarjetaModalCrear text={"Forms"} /></div>
            <div><TarjetaModalCrear text={"Tooltip"} /></div>
            <div><TarjetaModalCrear text={"Radio buttons"} /></div>
            <div><TarjetaModalCrear text={"Paterns"} /></div>
            <div><TarjetaModalCrear text={"Toggle switches"} /></div>
            <div><TarjetaModalCrear text={"Loaders"} /></div>
            <div><TarjetaModalCrear text={"Checkboxes"} /></div>
          </div>
          <div className='container__modalCrear'>
          <button className='container__modalCrear__button-siguiente'>Siguiente</button>
          </div>
        </section>
      </Modal>
    </div>
  );
}