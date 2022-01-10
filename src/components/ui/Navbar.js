import React from 'react'
import { Link } from 'react-router-dom'
import { Cartwidget } from './Cartwidget'
import "./navbar.css"
const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Cartwidget />
                <ul className="nav__ul">
                    <Link to={`/category/:6154940c188b3540f08af666`}>Women</Link>
                    <Link to={`/category/:618d6572b719ea641a15404b`}>Men</Link>
                    <Link to={`/category/:615496897d02077de089f87a`}>Kids</Link>
                    
                </ul>
                <div className="nav__icons">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </nav> 
        </header>
    )
}

export default Navbar
