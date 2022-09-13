

import Historialicc  from "../../../components/nivel3/HistorialIcc";
import BarraLAteral from '../../../components/nivel3/Menuizq3'
import AgregarIcc from '../../../components/nivel3/ModalIcc'
import BorrarIcc from '../../../components/nivel3/borrarhistorialicc/BorrarHistorialICC'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function Legajos() {
  const navigate = useNavigate();
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
        <ThemeProvider /* theme={darkTheme} */>
            <CssBaseline />
       <BarraLAteral>
       
  
       < BorrarIcc/>
  <Historialicc/>
     
      </BarraLAteral>
        </ThemeProvider>
        
    </div>   :<div></div> } </div>
    );

}