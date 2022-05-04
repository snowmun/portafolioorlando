import React,{useState} from 'react';
import axios from 'axios';
import useAuth from '../component/auth/useAuth';
import{toast} from 'react-toastify';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap'
import { Link,useLocation, useNavigate } from 'react-router-dom';
import './LoginScreen.css';
const URI='http://localhost:5000/api/v0/login'


const LoginPage =()=> {

  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')   
  const [user, setUser] = useState(null)   
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(correo !== '' && contrasena !== ''  ){
      await axios.post(URI,{correo,contrasena})
      .then((res) => {
        const {data} =res;
          setTimeout(() => {
            localStorage.setItem('token',data?.token);
            navigate("/");
          }, 2500);
          toast.success('Usuario encontrado con Exito', {
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
          toast.error('El correo No existe o la contraseña es incorrecta', {
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
        toast.error('Debes ingresar los campos email y contraseña', {
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
  <>
    <Container className="contlogin">
      <Row>
        <Col>
          <Card id='cardlogin' style={{ maxWidth: '500px' }} className=" mx-auto p-2 ">
            <h3 className='titlelogin'>Inicio Sesion</h3>
            <Form  onSubmit={handleSubmit} className='formlogin'>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="7">
                  <Form.Control autoComplete="true" onChange={(e)=>setCorreo(e.target.value)}  type="email" placeholder="Ingrese Correo" />
                </Col> 
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="7">
                  <Form.Control autoComplete="true" onChange={(e)=>setContrasena(e.target.value)} type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <Form.Group className="ingresarbtn">
                <Button className="boton mt-2" type="submit" variant="primary" >Iniciar Sesion</Button>
              </Form.Group>
              <Form.Group className="linkInicio mt-3">
                <Link to="/" className="mr-5" > ¿Olvido Su Contraseña? </Link>
                <Link to="/register" className="ml-5"> Registrarme </Link>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  </>

  );
}

export default  LoginPage