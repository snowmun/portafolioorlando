import React from 'react';
import './NotFoundPage.css';
// import routes from '../../route/routes'
import { Link } from 'react-router-dom';

const Error500 =()=> {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
          <div className="container-fluid">
              <br/>
              <br/>
              <br/>
              <div class="text-center">
                    <div class="error mx-auto" data-text="500">500</div>
                    <p class="lead text-gray-800 mb-5">Internal Server Error</p>
                    <p class="text-gray-500 mb-0"> An Internal Server error has occured</p>
                    <Link to="/">&larr; Volver al Login </Link>
                </div>
          </div>
         
      </div>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
            <div className="copyright text-center my-auto">
                <span>Copyright &copy; Orlando Muñoz 2022</span>
            </div>
        </div>
      </footer>
    </div>

  );
}

export default  Error500