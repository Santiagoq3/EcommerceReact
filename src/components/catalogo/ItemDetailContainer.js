import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import "./itemdetailcontainer.css"
export const ItemDetailContainer = ({item}) => {

    let {id} = useParams();

    const [Productos, setProductos] = useState({
        data: [],
        loading: true
    })

    
    useEffect(() => {
        
        llamadaApi()
        
    }, [])
    
    const llamadaApi = async()=>{
        
        let url = `https://restserversq.herokuapp.com/api/productos/${id}`
        const resp = await fetch(url);
        const data = await resp.json();
        console.log("los productos xdxdxd", data)
        setProductos({
            data,
            loading: false
        })
    }
    return (
        <div>
            <ItemDetail Productos={Productos} />
        </div>
    )
}
