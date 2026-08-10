import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect,useState } from 'react';

const DarkMode = () => {
    const [Theme, setTheme] = useState("black");
    const [TextTheme,setTextTheme]=useState("white")
   useEffect(()=>{

   
  document.body.style.backgroundColor=Theme;
  document.body.style.color=TextTheme;
},[Theme,TextTheme])
  function HandleChangeTheme (){
   
        setTheme((prevTheme)=>(
            prevTheme==="black" ? "white":"black"
        ));
        setTextTheme((prevText)=>(
            prevText==="white" ? "black":"white"
        ))
   
  }

  
 
  return (
   <>
        <i onClick={HandleChangeTheme}>  <MdOutlineDarkMode className="text-4xl cursor-pointer  " /></i>
    </>
  )
}

export default DarkMode

