import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component_home/component_user/Header';
import Footer from './component_home/component_user/Footer';
import InterfaceHome from './component_home/component_user/InterfaceHome';
import HendelSeursh from './component_home/component_user/HendelSeursh';
import Show from './component_home/component_user/Show';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import SignUp from './component_login/SignUp';
// import Login from './component_login/Login';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={[<Header/> , <HendelSeursh />,<InterfaceHome /> ,<Footer />]} />  
          <Route path="/show" exact element={[<Header/> , <HendelSeursh />, <Show /> ,<Footer />]} />
{/* 
          <Route path='/signUp' exact element={<SignUp />} />  
          <Route path='/login' exact element={<Login/>} />   */}

        </Routes>
      </BrowserRouter>

   
    </div>
  )
}

export default App