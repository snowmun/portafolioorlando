import React from 'react';
import { Navigate,useLocation} from 'react-router-dom';
import useAuth from '../component/auth/useAuth';
import routes from '../route/routes'
import{toast} from 'react-toastify';

const PrivateRoute=({children,hasRole:role})=> {

    const location = useLocation();
    console.log(location);
    const {hasRole,isLogged} = useAuth();
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', location.pathname);

    localStorage.setItem('lastPath', pathname + search );

    if(role && !hasRole(role)){
          toast.error('debes iniciar sesion', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme:'dark',
          }); 
        return  <Navigate to={routes.home} />
    }

    // return user?children :<Navigate to="/register" />-
    // if(hasRole && user.role !==hasRole) return <Navigate to="/" />

    if(!isLogged()) return <Navigate to={routes.login} />

    return(
         children
    )
    
}

export default PrivateRoute;

