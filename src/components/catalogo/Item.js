import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./item.css"
import { ItemQuickView } from './ItemQuickView'

export const Item = ({producto}) => {

    const {_id,precio,} = producto
    const [handleQuickView, sethandleQuickView] = useState(false)

    const handleQuickViewTrue = ()=>{
        sethandleQuickView(true)
    }
    const [overItem, setoverItem] = useState("none")
    return (
        <div className="item" onMouseOver={()=> setoverItem("")} onMouseOut={()=> setoverItem("none")}>
            <div className="item__container-img">

             <img src="assets/images/image-product-1.jpg"  />

            
             
            </div>
            <Link to={`/item/${_id}`} className="item__card">
                <p className="item__card__product-title">{_id}</p>
                <p className="item__card__product-price">{precio}</p>
            </Link>
           
        </div>
    )
}
