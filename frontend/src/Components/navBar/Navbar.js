import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <input type="checkbox" id="active"/>
    <label for="active" className="menu-btn"><i class="fas fa-bars"></i></label>
    <div className='wrapper'>
      <ul>
        <li><a><Link to={'/'}/>Home</a></li>
        <li><a><Link to={'/list'}/>Contact List</a></li>
        <li><a><Link to={'/add'}/>Add Contact</a></li>
      </ul>
    </div>
    </>
    /* <div className="content">
      <div className="title">Fullscreen Overlay Navigation Bar</div>
      <p> with HTML & CSS Neon Effect </p>
    </div> */
)
}

export default Navbar