import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
//Component !=Pages

import Header from './component/Header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>
   <ToastContainer/>
   </>
  );
}

export default App;
