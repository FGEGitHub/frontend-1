import { StepButton, Stepper, Step, Stack, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState, useEffect} from "react";
import AddFoto from "./addLegajo/AddFoto";
import AddAfip from "./addAfip/AddAfip";
import AddDomicilio from "./addDomicilio/AddDomicilio";

import DjjDatosPerso from "../declaracionesJuradas/datosPersonales/AddDatos";
import DjjCalidadPep from "../declaracionesJuradas/calidadDePersonas/AddPersonas";
import DjjOrigen from "../declaracionesJuradas/origen/AddOrigen";
import AcreditacionIngresos from "./acreditacionIngresos/AcreditacionIngresos";


const SubirLegajo = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([
        {label: 'Fotocopia Dni', completed:false},
        {label: 'Constancia de AFIP', completed:false},
        {label: 'Acreditacion de Domicilio', completed:false},
        {label: 'DJJ Datos Personales', completed:false},
        {label: 'DJJ Calidad de Persona(pep)', completed:false},
        {label: 'DJJ Origen de fondos', completed:false},
 
     
   
    ]);

    const [user, setUser] = useState([''])

    
    useEffect(() => {
        
        const preba = JSON.parse( window.localStorage.getItem('loggedNoteAppUser'))
        
        setUser(preba)
        if (preba.razon == 'Persona'){
            setSteps([
                {label: 'Fotocopia Dni', completed:false},
                {label: 'Constancia de AFIP', completed:false},
                {label: 'Acreditacion de Domicilio', completed:false},
                {label: 'DJJ Datos Personales', completed:false},
                {label: 'DJJ Calidad de Persona(pep)', completed:false},
                {label: 'DJJ Origen de fondos', completed:false},
                {label: 'Acreditacion de ingresos', completed:false},
             
           
            ])
        }
    }, [])
    
    
    

    const checkDisabled = () =>{
        if (activeStep < steps.leght -1) return false
        
    }
    
    return (
        <Container sx={{my:4}}>
            <Stepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            sx={{mb:3}}
          >
            {steps.map((step, index) => (
                <Step key={step.label} completed={step.completed}>
                    <StepButton onClick={() => setActiveStep(index)}>
                        {step.label}
                    </StepButton>
                </Step>
            ))}
                

            </Stepper>
            <Box>
                {{
                    0: <AddFoto 
                    cuil_cuit = {user.cuil_cuit }/>,
                    1: <AddAfip
                    cuil_cuit = {user.cuil_cuit }/>,
                
                    2: <AddDomicilio 
                    cuil_cuit = {user.cuil_cuit }/>,
                    3: <DjjDatosPerso
                    cuil_cuit = {user.cuil_cuit } />,
                   
                    4: <DjjCalidadPep 
                    cuil_cuit = {user.cuil_cuit }/>,
                   5: <   DjjOrigen 
                    cuil_cuit = {user.cuil_cuit }/>,
                   6: <   AcreditacionIngresos 
                    cuil_cuit = {user.cuil_cuit }/>,


                 
               

                }[activeStep]}
            </Box>
            <Stack
            direction="row"
            sx={{pt:2, pb:7, justifyContent:"space-around"}}
            >
                <Button
                
                disabled={!activeStep}
                onClick={()=>setActiveStep(activeStep=>activeStep -1)}
                >
                    Volver
                </Button>
                <Button
                disabled={checkDisabled()}
                onClick={()=>setActiveStep(activeStep=>activeStep +1)}
                >
                    Siguiente
                </Button>



            </Stack>
        </Container>
    );
};

export default SubirLegajo;