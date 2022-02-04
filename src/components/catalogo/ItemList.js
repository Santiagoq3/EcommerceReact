import React from 'react'
import { Item } from './Item'
import "./itemlist.css"
export const ItemList = ({Productos}) => {

    const {data,loading} = Productos;

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
