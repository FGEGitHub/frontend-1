import * as React from 'react';
import { useEffect, useState } from "react";


import DetalleC from '../../../components/nivel2/detalleclienteIngresos/Detallecliente';

import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel2/MenuIzq2'
import servicioUsuario from '../../../services/usuarios'



//import {makeStyles} from "@material-ui/core/styles"


const drawerWidth = 240;

export default function DetalleCliente() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [modal, setModal] = useState(false)
 
 
  const [logueado, setLogueado] = useState(false) 
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      if (user.nivel != 2){
        window.localStorage.removeItem('loggedNoteAppUser')
     navigate('/login')

      }else{

        setLogueado(true)
      }
    
      //servicioUsuario.setToken(user.token)  
     
      
    }
   
  }, [])


  
  


 

  ////////

  return (
    <div> 
  { logueado ? <div> 
    <BarraLAteral>
    
      {<DetalleC />}
 </BarraLAteral>
 </div>   :<div></div> } </div>
  );
}