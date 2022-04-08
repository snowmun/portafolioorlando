import { createContext , useState} from "react";
import roles from '../../helpers/roles'
import { useNavigate } from 'react-router-dom'
export const authContext = createContext();

const AuthProvider=({children})=> {
    const [user,setUser]=useState(null);
    // const [user]=useState({id:1,role:roles.regular});
    // const [user]=useState({id:2,role:roles.admin});
    const history = useNavigate();
    const login = (userCredentials)=>{
      const lastPath = localStorage.getItem('lastPath') || '/';

      setUser({id:1,name:'Orlando Muñoz',email:'or.munozf@gmail.com',edad:31,role:roles.admin,
      hobbie:'Jugar VideoJuegos y Ver cursos',nacionalidad:'Chileno',estado:'Soltero'}); 
      
      if(lastPath){
        history(lastPath)
      }
    }

    const logout = ()=>{
      
      return setUser(null)
    }

    // comprobaremos si esta autenticado true o false
    const isLogged = ()=> !!user;
    // comprobar que si tiene un rol o tiene un valor 
    const hasRole = (role) => user?.role===role;

    const contextValue={
      user,
      isLogged,
      hasRole,
      login,
      logout
    };
  return (
    <authContext.Provider value={contextValue}>
        {children}
    </authContext.Provider>
  );
}

export default  AuthProvider
