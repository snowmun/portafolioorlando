import React from 'react';
import { Navigate,useLocation} from 'react-router-dom';
import useAuth from '../component/auth/useAuth';

const PublicRoute=({children})=> {
    const {hasRole,isLogged} = useAuth();

    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );
    return isLogged?children :<Navigate to="/" />
   
}

export default PublicRoute;

