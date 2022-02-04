import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import "./itemdetailcontainer.css"

import { firestore } from '../../firebase.config'
import { collection , getDocs , query , where } from "firebase/firestore"

export const ItemDetailContainer = ({item}) => {

    let {id} = useParams();

    const [Productos, setProductos] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        
        llamadaApi(id)
        
    }, [id])
    
    const llamadaApi = async(id)=>{
        
        const q = query(collection(firestore,"items"),where("id", "==", id))
           const resp = getDocs(q)
            resp
            .then((data) => setProductos({
                data: data.docs.map(d => d.data()),
                loading: false
            }))
            .catch((err)=> console.log(err))
    }
    return (
        <div>
            <ItemDetail Productos={Productos} />
        </div>
    )
}
