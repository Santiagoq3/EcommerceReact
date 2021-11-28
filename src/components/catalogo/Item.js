import React, { useState } from 'react'
import "./item.css"
import { ItemQuickView } from './ItemQuickView'

export const Item = ({producto}) => {

    const {title,price,pictureUr} = producto

    const [overItem, setoverItem] = useState("none")
    return (
        <div className="item" onMouseOver={()=> setoverItem("")} onMouseOut={()=> setoverItem("none")}>
            <div className="item__container-img">

             <img src={pictureUr}  />

            
            <button className="item__btn-quick-view" style={{display: overItem}}>
                    Quick View
            </button>
             
            </div>
            <div className="item__card">
                <p className="item__card__product-title">{title}</p>
                <p className="item__card__product-price">{price}</p>
            </div>
        </div>
    )
}
