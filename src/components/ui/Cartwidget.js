import React from 'react'
import { Link } from 'react-router-dom'
import "./cartwidget.css"
export const Cartwidget = () => {
    return (
        <div className="cartWidget">
            <h1 className="nav__h1">
                <Link to="/">Logo</Link>
            </h1>
        </div>
       
    )
}
