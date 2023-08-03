import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";

 
 const App = () => {
   return (
    <>
     <div>
      <Navbar/>
      <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
     </div>
    </>
   )
 }
 
 export default App