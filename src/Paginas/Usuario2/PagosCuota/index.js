import * as React from 'react';
import { useEffect, useState } from "react";


import DetallesPagos from '../../../components/nivel2/detallePagosCuota/DetallesPagosCuotas';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel2/MenuIzq2'
import servicioUsuario from '../../../services/usuarios'



//import {makeStyles} from "@material-ui/core/styles"


const drawerWidth = 240;

export default function DetalleCliente() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [modal, setModal] = useState(false)
 
  const [ingreso, setIngreso] = useState({
    ingreso: "",
   
  });

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token)


    }

  }, [])


  


  ////////

  return (
    <BarraLAteral>

      {<DetallesPagos
       />}
 </BarraLAteral>
  );
}