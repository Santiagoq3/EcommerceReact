import React from 'react'
import { Item } from './Item'
import "./itemlist.css"
export const ItemList = ({Productos}) => {

    const {data,loading} = Productos;
//     const picture= "assets/images/image-product-1.jpg"
//     const productos = [
//         {
//             title: "Zapatillas nike" ,
//             price: "58$",
//             pictureUr: picture
//         },
//         {
//             title: "Zapatillas nike" ,
//             price: "58$",
//             pictureUr: picture
//         },
//         {
//             title: "Zapatillas nike" ,
//             price: "58$",
//             pictureUr: picture
//         },
//         {
//             title: "Zapatillas nike" ,
//             price: "58$",
//             pictureUr: picture
//         },
//         {
//             title: "Zapatillas nike" ,
//             price: "58$",
//             pictureUr: picture
//         },
//         {
//             title: "Zapatillas nike" ,
//             price: "58$",
//             pictureUr: picture
//         },
// ]
    return (
        <div className="itemlist">

            {
                loading ? <p>cargando...</p>

                :


                
                data.map(producto => {
                        return <Item producto={producto} />
                    })
                
            }
            
        </div>
    )
}
