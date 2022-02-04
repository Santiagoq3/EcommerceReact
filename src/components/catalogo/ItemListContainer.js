import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../../firebase.config'
import { collection , getDocs , query , where } from "firebase/firestore"
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
           
           const q = query(collection(firestore,"items"),where("categoria", "==", id))
           const resp = getDocs(q)
            resp
            .then((data) => setProductos({
                data: data.docs.map(d => d.data()),
                loading: false
            }))
            .catch((err)=> console.log(err))
            
        }else{

            const q = query(collection(firestore,"items"))
            const resp = getDocs(q)
             resp
             .then((data) => setProductos({
                 data: data.docs.map(d => d.data()),
                 loading: false
             }))
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
