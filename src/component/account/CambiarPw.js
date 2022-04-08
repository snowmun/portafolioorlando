import React, { useEffect } from 'react'
import {Modal,Form,Alert,Button} from 'react-bootstrap'
// import useAuth from '../auth/useAuth'
import {useForm} from 'react-hook-form'
import cambiarContrasena from '../../validations/cambiarContrasena';
const CambiarPw = ({isOpen,close}) => {

  const {register,handleSubmit,formState,reset} = useForm({resolver:cambiarContrasena});
  const {errors} = formState;
  const onSubmit = (formData) => {
    //formData es la contraseña nueva
    alert("contraseña cambiada")
  }
useEffect(()=>{
  if(!isOpen){
    reset()
  }
},[isOpen])

  return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Cambiar Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                placeholder="Nueva Contraseña"
                type="password"
                {...register("password")}/> 
                {errors?.password &&(
                  <Form.Text>
                    <Alert  variant="danger">
                      {errors.password.message}
                    </Alert>
                  </Form.Text>
                )}
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer >
            <Button  variant="secondary" onClick={close} >Cancelar</Button>
            <Button variant="primary" onClick={handleSubmit(onSubmit)} >Actualizar Contraseña </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CambiarPw;