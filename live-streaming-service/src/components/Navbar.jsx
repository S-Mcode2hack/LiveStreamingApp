import React from 'react'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div id='navigation-bar'>
        <div id="logo-section">
            <img id="logo" src={require("../media/logo.png")} alt="" />
        </div>
        <div id="navbar-categ-section">
            <ul>
                <li><a href='#' class="navbar-categ-link">Genre</a></li>
                <li><a href='#' class="navbar-categ-link">Movies</a></li>
                <li><a href='#' class="navbar-categ-link">Series</a></li>
                <li><a href='#' class="navbar-categ-link">Kids</a></li>
            </ul>
        </div>
        <div id="account-section">
            <a ><img className='navbar-right-links' src={require('../media/images/download.png')} alt="" /></a>
            <a ><img className='navbar-right-links' src={require('../media/images/accountlogo.png')} alt="" /></a>
        </div>
    </div>
  )
}

export default Navbar