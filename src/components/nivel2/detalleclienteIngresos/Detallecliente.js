import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from './FichaAxios'
import servicioCliente from '../../../services/clientes'
import Ingreso from './Ingresos'

import PEP from './DeterminarPep'


const DetalleCliente = () => {
   
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState({})
     const [habilitado, sethabilitado] = useState(false)
     const [expuesta, setExpuesta] = useState(false)
     useEffect(() => {

        traer()

    }, [])
     const traer = async () => {

        const clientee = await servicioCliente.clientehabilitado(cuil_cuit)
       
         setCliente(clientee[1])
    console.log(clientee[0])
         if (clientee[0][0].habilitado =='Si'){
             sethabilitado(true)
         }
         if (clientee[0][0].expuesta =='SI'){
          setExpuesta(true)
      }

            ;
    };
  

    return (


        <div> 
            
               <div>   
                <div> 
                <PEP
                cuil_cuit = {cuil_cuit}
                /> 
             
                {expuesta ? <div>
                 Persona PEP

                   </div> : 
                   <div>
                   
                   No es PEP
                     </div>}
                
               </div>
             <InfoCliente
                 cuil_cuit={cuil_cuit} />
             </div>

             {habilitado ? <div>
                Cliente habilitado por {cliente.cuil_cuit}  , el dia {cliente.fecha}
                <div> <Ingreso/> </div>
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}
                 
            </div> : <div> Cliente no habilitado por {cliente.cuil_cuit}  ,el dia {cliente.fecha}, no se puede asignar el lote </div> }
             
        </div>
    )
}
export default DetalleCliente