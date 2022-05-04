import { createContext , useState} from "react";
import roles from '../../helpers/roles'
import { useNavigate } from 'react-router-dom'
export const authContext = createContext();

const AuthProvider=({children})=> {
    const history = useNavigate();
    const token = localStorage.getItem("token");

    // const login = (userCredentials)=>{
    //   const lastPath = localStorage.getItem('lastPath') || '/';      
    //   if(lastPath){
    //     history(lastPath)
    //   }
    // }

    const logout = ()=>{
          localStorage.clear();
    }

    // comprobaremos si esta autenticado true o false
    const isLogged = ()=> !!token;

    const contextValue={
      token,
      isLogged,
      // login,
      logout
    };
  return (
    <authContext.Provider value={contextValue}>
        {children}
    </authContext.Provider>
  );
}

export default  AuthProvider
