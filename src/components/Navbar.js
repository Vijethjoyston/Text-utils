import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.hometitle}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="true" to="/about">{props.about}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger mx-2" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch form-check-reverse text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckReverse"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckReverse" >Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = { title : PropTypes.string ,
    hometitle : PropTypes.string,
    aboutUs : PropTypes.string
}

Navbar.defaultProps = {
    title : "Set title here",
    hometitle : "Home title here",
    aboutUs : "About text"
}