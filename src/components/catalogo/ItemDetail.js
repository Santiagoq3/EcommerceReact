import React, { useContext, useEffect, useState } from 'react'
import "./itemdetail.css"
import picture from "./image-product-1.jpg"
import { Contador } from '../Contador'
import { cartContext } from '../../context/CartContext'
export const ItemDetail = ({Productos}) => {


    const [loader, setloader] = useState(true)
    const {data,loading} = Productos;
    const {producto} =data;
    const {addItem,Cart,yaexiste} = useContext(cartContext)
    
    const onAdd = (contador)=>{
        const {data,loading} = Productos;
        const {producto} =data;


        addItem(producto,contador)
    }



    return (
        <div className="itemdetail">

            <div className="itemdetail__container-img">

                <img src={picture}  />



            </div>
            
                {loading ? <p>cargando...</p>

                :
                
            
            
                <div className="itemdetail__detail">

                    <div className="itemdetail__detail-top">
                        <h2>{producto.nombre}</h2>
                        <p>{producto.precio}$</p>
                    </div>
                    <div className="itemdetail__detail-middle">
                        <Contador onAdd={onAdd}/>
                    </div>
                    <div className="itemdetail__detail-bottom">
                        <h2>Descripcion</h2>
                        <p>
                        {producto.descripcion}
                        </p>
                    </div>
                    {yaexiste && <p>El producto ya existe en el carrito</p>}
                </div> 
            }
                
            
            

            
        </div>
    )
}
