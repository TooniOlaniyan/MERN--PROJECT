import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
//Pages
import Home from './pages/Home'
import NewTicket from './pages/NewTicket'
import Login from './pages/Login'
import Register from './pages/Register'
import Tickets from './pages/Tickets'
//Component Pages

import Header from './component/Header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './component/PrivateRoute'


function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/new-ticket' element={<PrivateRoute/>}>
        <Route path='/new-ticket' element={<NewTicket/>}/>
      </Route>
      <Route path='/ticket' element={<PrivateRoute/>}>
        <Route path='/ticket' element={<Tickets/>}/>
      </Route>
    </Routes>
   </Router>
   <ToastContainer/>
   </>
  );
}

export default App;
