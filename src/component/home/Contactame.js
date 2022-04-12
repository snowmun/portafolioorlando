import React,{useState}from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Container,Row,Modal,Form,Button} from 'react-bootstrap'
import{toast} from 'react-toastify';

import enviarContactame from '../../validations/enviarContactame';

const URI='http://localhost:8000/mail'

const Contactame = () => {
    const [correo, setCorreo] = useState('')
    const [asunto, setAsunto] = useState('')
    const [mensaje, setMensaje] = useState('')
    
    const handleSubmit =  (e) =>{
        e.preventDefault()
  
         axios.post(URI,{correo,asunto,mensaje})
        toast.success('Mensaje enviado con exito', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:'dark',
        });
        e.target.reset()

    }

  return (
    <>
    <Container>
      <Row>
              <Form onSubmit={handleSubmit} className="container-fluid">
                  <fieldset>
                  <Modal.Header > 
                      <Modal.Title className="text-center border-0">Contactame</Modal.Title>
                  </Modal.Header>
                  <Form.Group>
                      <Form.Control className="mt-2 mb-3"
                      required
                      onChange={(e)=>setCorreo(e.target.value)}
                      placeholder="Ingrese su correo" 
                      type="email"
                      /> 
                       <Form.Control className="mt-2 mb-3"
                       required
                      onChange={(e)=>setAsunto(e.target.value)}
                      placeholder="Ingrese el Asunto" 
                      type="text"
                      />  <Form.Control className="mt-2 mb-3"
                      required
                      as="textarea"
                      onChange={(e)=>setMensaje(e.target.value)}
                      placeholder="Ingrese un Mensaje" 
                      type="text"
                      />
                      <Modal.Footer >
                          <Button type="submit" variant="outline-success">Enviar</Button>
                      </Modal.Footer>
                  </Form.Group>
                  </fieldset>
              </Form>
      </Row>
  </Container>
  </>
    
  )
};

export default Contactame
