import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./item.css"
import { ItemQuickView } from './ItemQuickView'

export const Item = ({producto}) => {
    console.log(producto)
    const {nombre,precio,img} = producto
    const [handleQuickView, sethandleQuickView] = useState(false)

    const handleQuickViewTrue = ()=>{
        sethandleQuickView(true)
    }
    const [overItem, setoverItem] = useState("none")
    return (
        <div className="item" onMouseOver={()=> setoverItem("")} onMouseOut={()=> setoverItem("none")}>
            <div className="item__container-img">

             <img src={img} className='item_img'  />

            
             
            </div>
            <Link to={`/item/${nombre}`} className="item__card">
                <p className="item__card__product-title">{nombre}</p>
                <p className="item__card__product-price">$ {precio}</p>
            </Link>
           
        </div>
    )
}
