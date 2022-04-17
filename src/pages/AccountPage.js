import React from 'react';
import { Link } from 'react-router-dom';

import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import DeleteModal from '../component/account/DeleteModal';
import CambiarPw from '../component/account/CambiarPw';
import useAuth from '../component/auth/useAuth';
import EditarUsuario from '../component/account/EditarUsuario';
import EditarImagen from '../component/account/EditarImagen';
import useModal from '../hooks/useModal';
import YoAccount from  '../img/yoAccount.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import pdf from '../img/pdf/OrlandoMuñozFlores.pdf'
const AccountPage =()=> {

  const {user} = useAuth();
  
  // const [isOpenDeleteModal,openDeleteModal,closeDeleteModal] = useModal();
  // const [isOpenCambiarPwModal,openCambiarPwModal,closeCambiarPwModal] = useModal();
  // const [isOpenEditarUsuarioModal,openEditarUsuarioModal,closeEditarUsuarioModal] = useModal();
  // const [isOpenCambiarImageModal,openCambiarImageModal,closeCambiarImageModal] = useModal();
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="text-center mt-4">
            <div >
             {/* onClick={openCambiarImageModal} */}

                <img id="YoAccount" className="img-fluid rounded-start"  alt="foto mia" src={YoAccount} />
            </div>
          
          </Col>
          <Col>
            <Card style={{ maxWidth: '360px' }} className="mx-auto p-4 mt-2">
              <p className="text-center"><b>Nombre: </b>{user.name}</p>
              <p className="text-center"><b>Edad: </b>{user.edad}</p>
              <p className="text-center"><b>Correo: </b>{user.email}</p>
              <p className="text-center"><b>Lenguaje Favorito: </b>{user.lenguajeFav}</p>
              <p className="text-center"><b>Hobbie: </b>{user.hobbie}</p>
              <p className="text-center"><b>Nacionalidad: </b>{user.nacionalidad}</p>
              <p className="text-center"><b>Estado civil: </b>{user.estado}</p>
              <p className="text-center" >  
                      <button className={`btn`}>
                        <a   href={pdf} target="_blank" rel="noopener noreferrer" download="OrlandoMF_CV.pdf"> 
                        Descargar CV
                        </a>
                      </button>
                      </p>
              <p className="text-center">
                <a href="https://www.facebook.com/orlando.m.flores.9/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mr-2" style={{fontSize:"1.5em", color:" #3b5998"}}/>{" "}</a>
                <a href="https://www.instagram.com/snow.mun/?hl=es" target="_blank"><FontAwesomeIcon icon={faInstagram} className="mr-2" style={{fontSize:"1.5em", color:"#517fa4"}}/>{" "}</a>
                <a href="https://www.linkedin.com/in/ormunozf" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"1.5em", color:"#007bb6"}}/>{" "}</a>
     
              </p>
              


              {/* <Button variant="warning" onClick={openEditarUsuarioModal} >
                Editar Cuenta
              </Button>
              <Button variant="link" className="mt-1" onClick={openCambiarPwModal}>
                Cambiar Contraseña
              </Button>
              <Button variant="link" className="mt-3 text-danger"  onClick={openDeleteModal} >
                Eliminar Cuenta
              </Button> */}
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal
      // isOpen={isOpenDeleteModal}
      // close={closeDeleteModal}
      />
      <CambiarPw
        // isOpen={isOpenCambiarPwModal}
        // close={closeCambiarPwModal}
      />    
      <EditarUsuario
      // isOpen={isOpenEditarUsuarioModal}
      // close={closeEditarUsuarioModal}
      // user={user}
    />

    <EditarUsuario
      // isOpen={isOpenEditarUsuarioModal}
      // close={closeEditarUsuarioModal}
      // user={user}
    />
       <EditarImagen
      // isOpen={isOpenCambiarImageModal}
      // close={closeCambiarImageModal}
      // user={user}
    />
    </>

  );
}

export default  AccountPage