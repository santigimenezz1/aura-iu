import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../SelectorCategoria/selectorCategoria.css'
import BotonCategoria from './BotonCategoria/BotonCategoria';

export default function SelectorCategoria() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        color: 'white',
        display: "flex",
        flexDirection:"column",
        gap: "10px",
        marginTop:"20px"
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
        <h1 className='titulo__elements'>Elements</h1>
        <BotonCategoria  text={"All"} cantidad={1500}/>
        <BotonCategoria  text={"Cards"} cantidad={200}/>
        <BotonCategoria  text={"Inputs"} cantidad={389}/>
        <BotonCategoria  text={"Form"} cantidad={5200}/>
        <BotonCategoria  text={"Tooltip"} cantidad={3214}/>
        <BotonCategoria  text={"Buttons"} cantidad={50}/>
        <BotonCategoria  text={"Radio buttons"} cantidad={14}/>
        <BotonCategoria  text={"Patterns"} cantidad={66}/>
        <BotonCategoria  text={"Patterns"} cantidad={1142}/>
        <BotonCategoria  text={"Toggle switches"} cantidad={4250}/>


    </Box>
  );

  return (
    <div>
      <button className='SelectorCategoria__button' onClick={toggleDrawer(true)}>
        Elements <ArrowDropDownIcon fontSize='small' />
      </button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#212121', borderRadius:"7px", padding: "15px" // Cambiar el color de fondo a negro
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
