import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";

import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import ModalVer from "./ModalVer";

const TablaNotificaciones = (props) => {
    const [cbus, setCbus] = useState([''])
    const [usuario, setUsuario] = useState([''])
    const navigate = useNavigate();
    useEffect(() => {
        traer()
       
     
     
      }, [])


    const traer = async () => {
        try {
            const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
            if (loggedUserJSON) {
              const usuario = JSON.parse(loggedUserJSON)
              console.log(usuario.cuil_cuit)
              setUsuario(usuario)
              const cant  = await servicioUsuario1.cbuscliente(usuario.cuil_cuit)
              console.log(cant)
              setCbus(cant)
            }
           
        } catch (error) {
            
        }
      
      



    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
            < ModalVer
           // id = {cbus[dataIndex].id}
           />
            <Tooltip title="Responder">
            <ForwardToInboxTwoToneIcon style={{ cursor: "pointer" }} 
          //  onClick={() =>  navigate('/usuario/respuesta/'+cbus[dataIndex].id)  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
            </Tooltip>
            </div>
          </>
        );
      }
    // definimos las columnas
    const columns = [
        {
            name: "id",
            label: "ID",

        },
        {
            name: "numero",
            label: "numero",
        },
       
        {
            name: "estado",
            label:"estado",
           
        },
        {
            name: "lazo",
            label:"lazo",
           
        },
        {
            name: "Ver/Contestar",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
 

    ];

const options = {

    /*    rowsPerPage: 10,
       download: false, // hide csv download option
       onTableInit: this.handleTableInit,
       onTableChange: this.handleTableChange, */
};
// renderiza la data table
return (
    <div>
        <MUIDataTable
        
            title={"Notificaciones"}
            data={cbus}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            options={options}


        />
    </div>
)
}
export default TablaNotificaciones