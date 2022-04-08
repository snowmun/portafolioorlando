import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import './HomePage.css';
import Bienvenido from '../component/home/Bienvenido'
import Conocimientos from '../component/home/Conocimientos'
import Presentacion from '../component/home/Presentacion'
import Contactame from '../component/home/Contactame'

const HomePage =()=> {
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='col-6'>
          <Bienvenido/>
          <Conocimientos/>
          
        </Col>
        <Col className='col-6'>
          <div className='mt-5'>
            <Presentacion/>
          </div>
          <div className='mt-5'>
            <Contactame />     
          </div>
        </Col>
    
      </Row>

    </Container>
  );
}

export default  HomePage