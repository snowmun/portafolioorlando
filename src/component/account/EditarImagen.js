import React, { useState } from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
import{toast} from 'react-toastify';
// import useAuth from '../auth/useAuth';

const EditarImagen = ({isOpen,close}) => {
  // const {updateUser} = useAuth
  const [ fileName,setFileName] = useState("Subir Imagen");
  const [ selectedFile,setSelectedFile] = useState(null);
  const handleFileChange = (e) =>{
    const [file] = e.target.files;
    const validarTamaño= file.size < 200 * 1024 
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name);

    if(!validarTamaño) return toast.error("La imagen supera el tamaño maximo")
    if(!isValidType) return toast.error("Solo subir Imagenes")

    setFileName(file.name);

    // convertir imagen a base64
    const reader = new FileReader()
    reader.onloadend =() =>{
      setSelectedFile(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleUpdateProfilePic=()=>{
    if(!selectedFile) return toast.error('Debes seleccionar una nueva imagen');
    // updateUser({profilePic:selectedFile})
    alert("imagen subida con exito")
    close()
  }

  return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Cambiar Imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" 
              onChange={handleFileChange} 
              accept=".jpg, .jpeg, .gif , .png" />
          </Form.Group>
          <img 
            className="img-fluid"
            src={selectedFile} 
            alt={fileName} />
        </Modal.Body>
        <Modal.Footer >
            <Button  variant="secondary" onClick={close} >Cancelar</Button>
            <Button variant="primary" onClick={handleUpdateProfilePic}>Actualizar Imagen </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default EditarImagen;