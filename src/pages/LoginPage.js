import React from 'react';
import useAuth from '../component/auth/useAuth';
import { useLocation } from 'react-router-dom';

const userCredentials ={}

const LoginPage =()=> {
  const location = useLocation();
  const {login} = useAuth();
  return (
    <div>
      <h1>Inicio Sesion</h1>
         <p>Bienvenido a mi Pagina porfavor Logeate con  usuario: invitado  pw:invitado</p>
         <div>
          <input type="text" name="" value="" placeholder="nombre de usuario" />
           
         </div>
         <div>
           <input type="password" name="" value="" placerholder="contraseña"/>
          
         </div>
        
          <button className="btn btn-primary" onClick={()=>login(userCredentials,location.state?.from)}>Iniciar Sesion</button>
    </div>

  );
}

export default  LoginPage