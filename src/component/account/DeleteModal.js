import React from 'react'
import {Modal,Alert,Button} from 'react-bootstrap'
import useAuth from '../auth/useAuth'

const DeleteModal = ({isOpen,close}) => {

  const {logout} =useAuth();
  const handleDelete = () => {
    // peticion hhtp
    // close()
    logout();
  }

  return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Eliminar Cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Alert variant="danger">
            ¿Estas Seguro que deseas eliminar esta cuenta? 
            <br/>  
            <b>Se eliminara permanentemente</b>
            </Alert>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close} >Cancelar</Button>
            <Button variant="danger" onClick={handleDelete} >Eliminar mi Cuenta</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal;