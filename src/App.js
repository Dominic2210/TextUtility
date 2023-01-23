import './App.css';
// import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar'
// import Alerts from './Components/Alerts';
// import FormTemp from './Components/FormTemp';
import Home from './Components/Home';
import About from './Components/About';





function App() {
  
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;