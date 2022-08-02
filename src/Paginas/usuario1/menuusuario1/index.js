

import Footer from '../../../components/usuario1/Footer';
/* import Navbar from './componentes/usuario1/Navbar'; */
import Banner from '../../../components/usuario1/Banner'
import Cards from '../../../components/usuario1/Cards'
import Faq from '../../../components/usuario1/Faq'
import Navbar from '../../../components/usuario1/Navbar1'
import Notificaciones from '../../../components/usuario1/Notificaciones'
import  useUser from '../../../hooks/useUser'
import { Divider, Toolbar } from '@mui/material';





export default function MenuUsuario1() {

    const usuario  = useUser().userContext


    return (
        <>
            <div className="App">


                <Navbar /> 
                <Notificaciones 
                    />  
                <Banner />
                <Divider variant="middle" />

                <Cards />
                <Divider variant="middle" />

                <Faq />
                <Toolbar />
                <Divider variant="middle" />

                <Footer />

            </div>


        </>
    );

}