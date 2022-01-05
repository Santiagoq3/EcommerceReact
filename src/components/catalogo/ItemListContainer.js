import React, { useEffect, useState } from 'react'
import { Contador } from '../Contador'
import { ItemList } from './ItemList'
import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) => {

    const [Productos, setProductos] = useState([])

    
    useEffect(() => {
        
        llamadaApi()
        
    }, [])
    
    const llamadaApi = async()=>{

        const resp = await fetch('https://restserversq.herokuapp.com/api/productos');
        const {productos} = await resp.json();
        console.log("los productos del fetch", productos)
        setProductos(productos)
    }

    return (
        <div className="ItemListContainer">
            <p className="ItemListContainer__greeting">
                {greeting} &#x2728; &#x2728;
            </p>
            <ItemList Productos={Productos} />
        </div>
    )
}
