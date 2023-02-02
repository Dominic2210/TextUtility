import './App.css';
import React, {useState} from 'react'
// import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Alerts from './Components/Alerts';
import FormTemp from './Components/FormTemp';
// import Home from './Components/Home';
// import About from './Components/About';







function App() {
  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        typ: type
      })
    setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

const [mode, setMode] = useState('light')

const toggleMode = () => {
if (mode === 'light') {
    setMode("dark")
    document.body.style.backgroundColor = 'black'
    showAlert("Dark mode enabled", "success")
 }
else{
    setMode("light")
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode enabled", "success")

 }
}
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes> */}
    
      <Navbar title = "Text Converter" tabOne = "Home" tabTwo = "About Us" mode = {mode} toggle = {toggleMode}/>
      <Alerts alert = {alert}/>
        <div className="container my-5">
        <FormTemp showAlert=  {showAlert} heading = "WELCOME TO THE TEXT ARENA" text_a = "Please enter text below: " mode = {mode}/>
      </div>

    </>
  );
}
export default App;