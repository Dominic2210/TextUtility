import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import FormTemp from './FormTemp'
import Alerts from './Alerts'




export default function Home() {

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
        <Navbar title = 'Text Converter' tabOne = 'Home' tabTwo = 'About Us' mode = {mode} toggle = {toggleMode}/>
        <Alerts alert = {alert}/>
        <div className="container my-5">
        <FormTemp showAlert=  {showAlert} heading = "WELCOME TO THE TEXT ARENA" text_a = "Please enter text below: " mode = {mode}/>
      </div>
        
    </>
  )
}

Home.propTypes = {
    title: PropTypes.string.isRequired,
    tabOne: PropTypes.string.isRequired,
    tabTwo: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}

Home.defaultProps = {
    title: 'Add Title/Name/Logo here',
    tabOne: 'Add first tab name; ex: Home.',
    tabTwo: 'Add second tab name; ex: About.',
    heading: 'Add heading'
}

