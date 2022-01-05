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
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
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
