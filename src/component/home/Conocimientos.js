import React from 'react';
import {GraficoBack,GraficoFront} from './Grafico';
// import ConocimientosGradicos from './ConocimientosGrafico'
const Conocimientos  = () => {
 
  return (
    <div>
      
    <div className='mt-5'>
        <h3>Conocimientos: </h3>
        <GraficoBack/>
      </div> 
        <div className='mt-3'>
        <GraficoFront />
          
        </div>
        </div>

      
    )
};

export default Conocimientos