import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchHelper } from '../../helpers/fetch.Helper'
import { Contador } from '../Contador'
import { ItemList } from './ItemList'
import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) => {

    const [Productos, setProductos] = useState({
        data: [],
        loading: true
    })

    let params =useParams()
    const {id} = params;
    let idOG = ""
    
    if(id){

         idOG  = id.replace(':','');
    }
    
    useEffect(() => {
        
        llamadaApi( id,idOG)
        
    }, [id])
    
    const llamadaApi = async(id,idOG)=>{
        // fetch(`https://restserversq.herokuapp.com/api/buscar/productos/${id}`, {mode: "no-cors"})
        if (id) {
            fetch(`https://restserversq.herokuapp.com/api/buscar/productos/${idOG}`)
            .then((res)=> res.json())
            .then(({productos})=> {
               console.log("ahora", productos)
                setProductos({
                    data: productos,
                    loading: false
                })
            })
            .catch((err)=> console.log(err))

        }else{

            fetch('https://restserversq.herokuapp.com/api/productos')
            .then((res)=> res.json())
            .then(({productos})=> {
               
                setProductos({
                    data: productos,
                    loading: false
                })
            })
            .catch((err)=> console.log(err))
        }
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
