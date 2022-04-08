import Header from '../Navbar/Header';
import {Outlet} from 'react-router-dom';
import Footer from '../Navbar/Footer';

function Layout() {
  return (
    <div>
      <Header/>
      <section>
        <Outlet/>  
      </section>
      <Footer/>

    </div>
  );
}

export default Layout;

