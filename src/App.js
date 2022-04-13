import AuthProvider from "./component/auth/AuthProvider";
import AppRouter from "./route/AppRouter";
import {HashRouter as Router } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router >
        <AuthProvider>
          <AppRouter/>
        </AuthProvider>
      </Router>
      <ToastContainer />
  
    </div>
  );
}

export default App;
