import React from 'react';
import{Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import routes from '../../route/routes';
import useAuth from '../auth/useAuth';
const logo = require ('../../img/logo.png');

const Header =()=> {
  const {logout} = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand  as={NavLink} to="/"><img src={logo}        
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to={routes.home}>Inicio</Nav.Link>

          <Nav.Link as={NavLink} to={routes.projects}>Proyectos</Nav.Link>
          {/* <NavDropdown title='Admin'>
            <NavDropdown.Item  as={NavLink} to={routes.admin.users} >Listar Usuarios</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={routes.admin.crearuser}>Crear Usuario</NavDropdown.Item>

          </NavDropdown> */}
        
        </Nav>
        <Nav>
          {/* <Nav.Link  as={NavLink} to={routes.login}>Iniciar Sesion</Nav.Link>
          <Nav.Link  as={NavLink} to={routes.register}>Registrarse</Nav.Link> */}
          <Nav.Link  as={NavLink} to={routes.account}>Ver Mi Perfil</Nav.Link>
          {/* <Nav.Link  to={routes.account} onClick={logout}>Cerrar Sesion</Nav.Link> */}
        
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}

export default  Header;