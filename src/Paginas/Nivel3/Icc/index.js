

import Historialicc  from "../../../components/nivel3/HistorialIcc";
import BarraLAteral from '../../../components/nivel3/Menuizq3'
import AgregarIcc from '../../../components/nivel3/ModalIcc'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function Legajos() {

  

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
       <BarraLAteral>
       <AgregarIcc/>
  <Historialicc/>
     
      </BarraLAteral>
        </ThemeProvider>
        
    
    );

}