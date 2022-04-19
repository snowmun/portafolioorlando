import React from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import blackJack from  '../img/proyectos/blackajck.jpg';
import agendador from  '../img/proyectos/agendador.jpg';
import crudTareas from  '../img/proyectos/crudtareas.jpg';
import {Link} from 'react-router-dom'
const ProjectPage =()=> {
  return (
    <Container>
      <Row className='mt-5'>

        <Col className='col-xs-12 col-sm-12  col-md-9'>
          <h2>Mis Proyectos </h2>
          <p>Aqui podras ver los proyectos que he realizado y si gustas puedes entrar a los link 
            he interactuar con estos, estas pequeñas webs que he realizado para probar distintas herramientas
          </p>
        </Col>
        <Col className='col-xs-12 col-sm-12 col-md-4'>
          <Card  className='mt-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={blackJack} />
            <Card.Body>
              <Card.Title>BlackJack</Card.Title>
              <Card.Text>
              Juego del BlackJack o bien conocido como el 21,puedes jugar contra la computadora.

              </Card.Text>
              <a href="https://snowmun.github.io/blackjackk/" target="_blank"><Button variant="primary">Ir a la Pagina</Button></a>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-xs-12 col-sm-12 col-md-4'>
          <Card  className='mt-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={crudTareas} />
            <Card.Body>
              <Card.Title>Crud Tareas</Card.Title>
              <Card.Text>
              Realice este crud con un servidor y cliente, se utiliza node js y en la DB mongoDB, se puede interactuar si gustan. 
                <br></br>
                Nota: Como lo monte en heroku al principio se demora un poco
              </Card.Text>
              <a href="https://tareafront.herokuapp.com/" target="_blank"><Button variant="primary">Ir a la Pagina</Button></a>
            </Card.Body>
          </Card>
        </Col> 
        <Col className='col-xs-12 col-sm-12 col-md-4'>
          <Card  className='mt-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={agendador} />
            <Card.Body>
              <Card.Title>Proyecto Practica</Card.Title>
                <Card.Text>
                  Estes es un proyecto que realice en mi practica user:admin pw:admin,
                  pueden interactuar si gustan
                </Card.Text>
                <a href="https://agendadorweb.herokuapp.com/" target="_blank"><Button variant="primary">Ir a la Pagina</Button></a>
        
            </Card.Body>
          </Card>
        </Col>
        
      </Row>

  </Container>
  );
}

export default  ProjectPage