import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartContext'
import { Cartwidget } from './Cartwidget'
import "./navbar.css"
const Navbar = () => {

    const {Cart} = useContext(cartContext);
    return (
        <header className="header">
            <nav className="nav">
                <Cartwidget />
                <ul className="nav__ul">
                    <Link to={`/category/mujer`} style={{color: "#4b5563"}}>
                        Mujeres
                    </Link>
                    <Link to={`/category/hombre`} style={{color: "#4b5563"}}>
                        Hombres
                    </Link>
                    <Link to={`/category/niño`} style={{color: "#4b5563"}}>
                        Niños
                    </Link>
                </ul>
                <div className="nav__icons">
                    <Link to="/cart" style={{color: "#4b5563"}}>

                        <i className="fas fa-shopping-cart">
                            <span className='header-cart-length'>{Cart.length}</span>
                        </i>

                    </Link>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </nav> 
        </header>
    )
}

export default Navbar
