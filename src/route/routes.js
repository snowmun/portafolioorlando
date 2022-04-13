const routes = {
    home:'/',
    account :'/account',
    login :'/login',
    register :'/register',
    projects :'/projects',
    project :(projectId)=>projectId?`/project/:${projectId}`:'/project/:projectId',
    admin:{
        users:'/admin/users',
        crearuser:'/admin/crearuser'
    }
    
}

export default routes;