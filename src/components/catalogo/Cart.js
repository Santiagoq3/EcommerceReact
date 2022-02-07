import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import  { cartContext } from '../../context/CartContext'
import "./cart.css"

export const Cart = () => {

    const {Cart,removeItem,total} = useContext(cartContext)
    console.log(Cart)
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            {

                Cart.length > 0 ?

                <ul>

                   { Cart.map(item => {
                        return <li className='cart_container'>
                            <div className='cart_container-top'>

                            <p className='cart_item-nombre'>{item.item.nombre}</p>
                            <p>$ {item.item.precio}</p>

                            </div>
                            <p>descripcion: {item.item.descripcion}</p>
                            <div className='cart_container-bottom'>
                                <p>Cantidad: {item.quantity}</p>
                                <button onClick={() => removeItem(item.item._id)}>Remove</button>
                            </div>
                        </li>
                    })}
                    <div className='cart_comprar'>

                        <div className='cart_comprar_total'>

                            <p>Total</p>
                            <p>$ {total}</p>
                        </div>
                        <button className='cart_btn-comprar'>
                            <Link to="/checkout">
                                Generar orden
                            </Link>
                        </button>
                        <Link to="/" className='cart_continuar-comprando' >
                            <p>o Continuar Comprando</p> 
                        </Link>
                    </div>
                </ul>
                

                : <div className='cart_vacio'>
                     <p>No hay productos en el carrito</p>
                     <Link to="/">Volver al home</Link>

                </div>
                
            }

            
            
        </div>
    )
}
