import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/lotes/Lotes';
import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'
import BarraLAteral from '../../../components/nivel3/Menuizq3'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

const drawerWidth = 240;

export default function Lotes3() {
  const navigate = useNavigate();
  const [nivel, setNivel] = useState(null)
  const [user, setUser] = useState(null)
  
  const [logueado, setLogueado] = useState(false) 


useEffect(() => {
  const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
  
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    if (user.nivel != 3){
      window.localStorage.removeItem('loggedNoteAppUser')
   navigate('/login')

    }else{

      setLogueado(true)
    }
  
    //servicioUsuario.setToken(user.token)  
   
    
  }
 
}, [])
 
  return (

    <div> 
  { logueado ? <div> 
    <ThemeProvider theme={darkTheme}>
    <BarraLAteral>
    <TableAxios />
 </BarraLAteral>
    </ThemeProvider>
    
    </div>   :<div></div> } </div>
  );
}