import React, {Fragment, useContext, useEffect, useState} from 'react';
import "./checkout.css"
import { collection, addDoc } from "firebase/firestore";
import { firestore } from '../../firebase.config';
import { async } from '@firebase/util';
import { cartContext } from '../../context/CartContext';
export const Checkout = () => {



    const {Cart,clear} = useContext(cartContext);
    const [isOrdenExisrt, setisOrdenExisrt] = useState(false);
    const [orden, setorden] = useState("");
    const [email, setemail]       = useState("");
    const [nombre, setnombre]     = useState("");
    const [telefono, settelefono] = useState("");

    let copyCart = [...Cart];
    copyCart = copyCart.map((items) => {
        return {
            nombre: items.item.nombre,
            id: items.item.id,
            precio: items.item.precio
        }
    })

   

    const handleOrden = ()=>{
        setisOrdenExisrt(true)
        clear()
        
    }

    const handleSubmit = (e)=>{

        e.preventDefault()

       const data = {
            buyer: {
                email,
                nombre,
                telefono
            },
            items: copyCart
        }

         handleAddData(data)
         .then((data)=> console.log(data))
         .catch((err)=> console.log(err))

         handleOrden()
    }

    const handleAddData = async(data) =>{

        const docRef = await addDoc(collection(firestore, "orders"), data);
        setorden(docRef.id)
    }

  return <div className='checkout'>

       {
           isOrdenExisrt ? 

           <div>

               {
                   orden == "" ? <p>Generando codigo de orden...</p>

                   :
                    <p>
                        Retire sus productos con el codigo : {orden}
                    </p>
               }
           </div>

        :
        <Fragment>

            <h1>Informacion de contacto</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name='email' value={email}      onChange={(e)=> setemail(e.target.value)} autoFocus required />
                <label>Nombre</label>
                <input type="text" name='nombre' value={nombre}     onChange={(e)=> setnombre(e.target.value)} required />
                <label>Telefono</label>
                <input type="text" name='telefono' value={telefono} onChange={(e)=> settelefono(e.target.value)} required />
                <button   type='submit'>
                        Confirmar orden
                </button>
            </form>
        </Fragment>
       }

  </div>;
};
