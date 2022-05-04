import axios from 'axios';
import React,{useState} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import './RegisterScreen.css';
import{toast} from 'react-toastify';

const URI='http://localhost:5000/api/v0/register'

const RegisterPage =()=> {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')   
    const [repcontrasena, setRepcontrasena] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(nombre !== '' && correo !== '' && contrasena !== '' && repcontrasena !== ''  ){
            if( contrasena === repcontrasena){
                    const rol =2;
                    await  axios.post(URI,{nombre,correo,contrasena,rol})
                    .then(() => {
                        setTimeout(() => {
                          navigate("/login");
                        }, 2500);
                        toast.success('Usuario Agregado con Exito', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme:'dark',
                        }); 
                      }).catch(() => {
                        toast.error('Usuario ya existe', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme:'dark',
                        });  
                      });        
            }else{
                toast.error('Las contraseñas no coinciden', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:'dark',
                });           
            }
        }else{
            toast.error('Deben estar todos los campos llenados', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:'dark',
            });           
        }
    }
  return (
    <Container className='regcontrainer'>
        <Row>
            <Col>
                <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
                    <h3 className='regtitle'>Registro</h3>
                    <Form className='Formregister'  onSubmit={handleSubmit} >
                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12">
                            <Form.Control   onChange={(e)=>setNombre(e.target.value)} type="text" placeholder="Ingrese un Nombre" />
                            </Col> 
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12">
                            <Form.Control onChange={(e)=>setCorreo(e.target.value)} type="email" placeholder="Ingrese un Correo" />
                            </Col> 
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Col sm="12">
                            <Form.Control  autoComplete="true" smashd onChange={(e)=>setContrasena(e.target.value)}   type="password" placeholder="Ingrese un Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Col sm="12">
                            <Form.Control   autoComplete="true" onChange={(e)=>setRepcontrasena(e.target.value)}  type="password" placeholder="Repita Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                        <Link to="/" className="linkInicio">&larr; Volver Al Inicio</Link>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit"  className="RegisterBoton mt-2" variant="primary" >Registrarse</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Col>           
        </Row>
    </Container>
  );
}

export default  RegisterPage