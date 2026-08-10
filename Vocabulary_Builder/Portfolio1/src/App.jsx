import { useState,useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import Footer from './components/Footer';
function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home/></>
  },

  {
    path:'/Saved',
    element:<><Navbar/><Saved/></>
  },
 {
    path:'/Profile',
    element:<><Navbar/><Profile/></>
  },

  
 
])

//   const [count, setCount] = useState(0)
// const fetchData=async ()=>{
//   try{
//     const word="blessing";
//     const responce=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//     console.log(responce.data);
//   }catch(err){
//     console.error("Error",err);
//   }
// }
// useEffect(()=>{
//   fetchData();
// },[]);
  return (
    <>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  )
}

export default App
