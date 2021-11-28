import React from 'react'
import { Contador } from '../Contador'
import "./itemquickview.css"

export const ItemQuickView = () => {
    return (
        <div className="itemquickview">
            <i class="fas fa-times"></i>
            <div className="itemquickview__body">
                <img src="assets/images/image-product-1.jpg" />
                <div className="itemquickview__body__product-info">
                    <h2>Zapatillas Nike</h2>
                    <p>90$</p>
                    <p>
                        Size
                    </p>
                    <ul className="itemquickview__body__product-info__sizes">
                        <li>XSS</li>
                        <li>XS</li>
                        <li>S</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                        <li>XXXL</li>
                    </ul>
                    <Contador />
                </div>
            </div>
        </div>
    )
}
