import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import FooterContact from './pages/FooterContact'
import Navbar from './components/Navbar'
function App() {
 const router= createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home/></>
  },
  {
    path:'/About',
    element:<><Navbar/><About/></>
  },
  {
    path:'/Project',
    element:<><Navbar/><Project/></>
  },
  {
    path:'/FooterContact',
    element:<><Navbar/><FooterContact/></>
  }
 ])

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
