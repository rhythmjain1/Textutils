import logo from './logo.svg';
import React,{ useRef } from "react";
import { Component } from 'react'
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import {useState}from "react";
import Alert from './Alert';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



function App() {
  const [mode , setMode]= useState('light');
  const[alert,setAlert]=useState(null);
  const myRef = useRef(9);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type: type
  })
  setTimeout(() => {
    setAlert(null); 
  },1500);
} 
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      showAlert('Dark mode has been enabled',"success")
      setInterval(() => {
        document.title='Textutils is great weebsite'
      },1500);
      setInterval(() => {
        document.title='Install Textutils '
      },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light mode has been enabled',"success")
    }
  }
  return (
<>
<Router>
<Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Routes>
  <Route path="/about" element={<About />} />
  <About />
</Routes>
          <Route path="/">
          <Textform heading="Enter text here" showAlert={showAlert} mode={mode} />
          </Route>
 </Routes>
</div>  
</Router>
</>
  );
}
export default App;
