import React from 'react'
import Header from './components/Header'
import {Outlet,useLocation} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from './components/adminComponents/adminHeader'


const App = () => {
  const location=useLocation()
  const isAdmin=location.pathname.startsWith('/admin')
  return (
    <div >
      {isAdmin ?<AdminHeader/>:<Header/>}
      <ToastContainer/>
      <Container className='my-2'>
      <Outlet/>
      </Container>
    </div>
  )
}

export default App
