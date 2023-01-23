import React, {useState} from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import Alerts from './Alerts';


export default function About(props) {

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

  const [myStyle, setMyStyle] = useState ({
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid black'
  })
  
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [hText, setHText] = useState("Light Mode")
  
  const darkMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      
      setHText("Dark Mode")
      setBtnText("Enable Light Mode")
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'
      })
      
      setHText("Light Mode")
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <>

      <Navbar title = 'Text Converter' tabOne = 'Home' tabTwo = 'About Us' mode = {mode} toggle = {toggleMode}/>
        <Alerts alert = {alert}/>

      <div className=" darkmode container" style={myStyle}>

        <h1>{hText}</h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-dark my-3" onClick={darkMode}>{btnText}</button>
      </div>
    </>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  tabOne: PropTypes.string.isRequired,
  tabTwo: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

About.defaultProps = {
  title: 'Add Title/Name/Logo here',
  tabOne: 'Add first tab name; ex: Home.',
  tabTwo: 'Add second tab name; ex: About.',
  heading: 'Add heading'
}