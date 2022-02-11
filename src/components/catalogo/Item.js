import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

export const Item = ({producto}) => {
    
    const {nombre,precio,img,id} = producto

    return (
        <div className="item">

            <div className="item__container-img">
             <img src={img} className='item_img'  />
            </div>

            <Link to={`/item/${id}`} className="item__card">
                <p className="item__card__product-title">{nombre}</p>
                <p className="item__card__product-price">$ {precio}</p>
            </Link>

        </div>
    )
}
