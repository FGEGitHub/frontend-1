import React from 'react';
import { Paper, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import servicioLegajo from '../../../../services/legajos'
import HomeIcon from '@mui/icons-material/Home';
import BackupIcon from '@material-ui/icons/Backup';


const AddDocimicilio = (props) => {
  const handleClick = () => {
    console.log('click');
  };                             
  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);

  const onDrop = useCallback  ((files, acceptedFiles) => {
    const formData = new FormData();
    setFileUpload(acceptedFiles);
    formData.append('file', files[0]);
  
    formData.append('datos', [props.cuil_cuit,'Acreditacion Domicilio']);
   
     servicioLegajo.subirlegajo1(formData)
   
       // window.location.reload(true);
     


    });
    const { getRootProps, getInputProps, isDragActive, isDragAccept, acceptedFiles } = useDropzone({
      onDrop,
      multiple: false,
      accept: 'document/*',
  
    });

    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    )); 
  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value })
    
}
  const selecthandler = e =>{
   setFile(e.target.files[0])
   console.log(file)
  }

  const enviar = () => {
   window.location.reload(true);
    let formdata = new FormData()
    console.log(file)
    formdata.append('image', file)






    servicioLegajo.subirlegajode(formdata)
    window.location.reload(true);
}
  return (
    <>
       <Paper
          sx={{
            cursor: 'pointer',
            background: '#fafafa',
            color: '#bdbdbd',
            border: '1px dashed #ccc',
            '&:hover': { border: '1px solid #ccc' },
          }}
        >
          <div style={{ padding: '16px' }} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p style={{ color: 'green' }}>Suelta aqui el documento</p>
            ) : (
              <p>Arrastra hasta aqui el archivo descargado con La Acreditaqcion Domicilio</p>
            )}
            <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
          </div>
        </Paper>
      <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
       >
        Archivos Aceptados <BackupIcon fontSize="small" />
        <ul>{acceptedFileItems}</ul>
        <Button onClick={enviar}>Enviar</Button>
      </Box>

      
    </>
  );
};

export default AddDocimicilio;