import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <div className="container-fluid2">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      <Link className="navbar-title" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.tabOne}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.tabTwo}</Link>
          </li>
        </ul>

        <div className={`form-check form-switch mx-2 text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          
          <button className="material-symbols-outlined" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>  

  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    tabOne: PropTypes.string.isRequired,
    tabTwo: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Add Title/Name/Logo here',
    tabOne: 'Add first tab name; ex: Home.',
    tabTwo: 'Add second tab name; ex: About.'
}
