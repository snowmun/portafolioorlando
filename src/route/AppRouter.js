import React from 'react';
import { Routes,Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import LoginPage from '../pages/LoginPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import NotFoundPage from '../pages/errores/NotFoundPage';
import UsersPage from '../pages/admin/UsersPage'
import CrearUser from '../pages/admin/CrearUser'
import Layout from '../component/layouts/Layout';
import PrivateRoute from './PrivateRoute';
import roles from '../helpers/roles'
import routes from './routes';
// import PublicRoute from './PublicRoute'};
const AppRouter =()=> {
  return (
        <Routes>
          <Route path={routes.home}   element={<Layout/>}>
            <Route  index element={<HomePage/>}/>
            <Route  path={routes.login} element={<LoginPage/>}/>
            <Route  path={routes.register} element={<RegisterPage/>}/>
            <Route  path={routes.account} element={<AccountPage/>}/>
            <Route  path={routes.projects} element={<ProjectPage/>}/>
            <Route  path={routes.project()} element={<PrivateRoute ><ProjectsPage/></PrivateRoute>}/>
            <Route  path={routes.admin.users} element={<PrivateRoute hasRole={roles.admin}><UsersPage /></PrivateRoute>}/>
            <Route   path={routes.admin.crearuser} element={<PrivateRoute hasRole={roles.admin} ><CrearUser /></PrivateRoute>}/> 
          </Route>
          {/* Ventana de errores  */}
          <Route exact path="*" element={<NotFoundPage/>}/>
        </Routes>
  );
}

export default  AppRouter
