import React from 'react'
import { Item } from './Item'
import "./itemlist.css"
import { ItemQuickView } from './ItemQuickView'
export const ItemList = () => {

    const picture= "assets/images/image-product-1.jpg"
    const productos = [
        {
            title: "Zapatillas nike" ,
            price: "58$",
            pictureUr: picture
        },
        {
            title: "Zapatillas nike" ,
            price: "58$",
            pictureUr: picture
        },
        {
            title: "Zapatillas nike" ,
            price: "58$",
            pictureUr: picture
        },
        {
            title: "Zapatillas nike" ,
            price: "58$",
            pictureUr: picture
        },
        {
            title: "Zapatillas nike" ,
            price: "58$",
            pictureUr: picture
        },
        {
            title: "Zapatillas nike" ,
            price: "58$",
            pictureUr: picture
        },
]
    return (
        <div className="itemlist">

            {
                productos.map(producto => {
                    return <Item producto={producto} />
                })
            }
            
        </div>
    )
}
