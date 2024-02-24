import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component_home/component_user/Header';
import Footer from './component_home/component_user/Footer';
import InterfaceHome from './component_home/component_user/InterfaceHome';
import HendelSeursh from './component_home/component_user/HendelSeursh';
// import SignUp from './component_login/SignUp';
// import Login from './component_login/Login';

const App = () => {
  return (
    <div>
        {/* <SignUp /> */}
        {/* <Login/> */}
        <Header/>
        <HendelSeursh/>
        <InterfaceHome/>
        <Footer/>
    </div>
  )
}

export default App