import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useState } from "react";
import servicioUsuario from '../services/usuarios'


export default function Ingresos() {
  let params = useParams()
    let cuil_cuit = params.cuil_cuit
   
  const [open, setOpen] = React.useState(false);
  const [usuario, setUsuario] = useState({
    cuil_cuit: "",
    password: "",
});
  const handleChange = (e) =>{
    console.log(usuario)
    setUsuario({  ...usuario, [e.target.name]: e.target.value })}

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault()

    const rta=  await servicioUsuario.registro(
      usuario
     )
    
 
    

   setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Registrarme
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro</DialogTitle>
        <DialogContent>

          <DialogContentText>
          Complete todos los datos 
          </DialogContentText>

          <form  onSubmit={handleDeterminar}> 
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="cuil_cuit"
            name="cuil_cuit"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type= "password"
            label="password"
            name="password"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="nombre"
            name="nombre"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Numero de cliente"
            name="nro_cliente"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="mail"
            name="mail"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="telefono"
            name="telefono"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
       
          <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button  type="submit">Enviar</Button>
        </DialogActions>
           </form>
        </DialogContent>
      
        
        
      </Dialog>
    </div>
  );
}
