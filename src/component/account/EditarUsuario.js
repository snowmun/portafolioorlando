import React, { useEffect } from 'react'
import {Modal,Form,Alert,Button} from 'react-bootstrap'
// import useAuth from '../auth/useAuth'
import {useForm} from 'react-hook-form'
import editarUsuario from '../../validations/editarUsuario';
import roles from '../../helpers/roles'
// import useAuth from '../auth/useAuth';

const EditarUsuario = ({isOpen,close,user}) => {

  const {register,handleSubmit,formState,reset} = useForm({resolver:editarUsuario});
  const {errors} = formState;
  const onSubmit = (formData) => {
    //formData es la contraseña nueva
    alert("usuario Actualizado")
  }
useEffect(()=>{
  if(!isOpen){
    reset()
  }
},[isOpen])

useEffect(()=>{
 if(user) reset({
    name:user.name,
    email:user.email,
    edad:user.edad,
    role:user.role
  });
},[])


  return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control className="mt-2"
                placeholder="Ingrese un Nombre" 
                type="text"
                {...register("name")}/> 
                {errors?.name &&(
                  <Form.Text>
                    <Alert  variant="danger">
                      {errors.name.message}
                    </Alert>
                  </Form.Text>
                  
                )}
                <Form.Control className="mt-2"
                placeholder="Ingrese una Edad"
                type="number"
                {...register("edad")}/> 
                {errors?.edad &&(
                  <Form.Text>
                    <Alert  variant="danger">
                      {errors.edad.message}
                    </Alert>
                  </Form.Text>
                  
                )}

                <Form.Control className="mt-2"
                placeholder="Ingrese un Email"
                type="email"
                {...register("email")}/> 
                
                {errors?.email &&(
                  <Form.Text>
                    <Alert  variant="danger">
                      {errors.email.message}
                    </Alert>
                  </Form.Text>
                  
                )}
                
                <Form.Control className="mt-2"
                as="select"
                disabled={true}
                {...register("role")}>
                {Object.keys(roles).map(role =>(
                  <option key={role}>{role}</option>
                ))}
                </Form.Control>

  
          
                {errors?.role &&(
                  <Form.Text>
                    <Alert  variant="danger">
                      {errors.role.message}
                    </Alert>
                  </Form.Text>
                  
                )}
                
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer >
            <Button  variant="secondary" onClick={close} >Cancelar</Button>
            <Button variant="primary" onClick={handleSubmit(onSubmit)} >Actualizar Mi Cuenta </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default EditarUsuario;