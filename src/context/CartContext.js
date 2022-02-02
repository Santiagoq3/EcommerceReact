
import React, { useEffect, useState } from 'react';

export const cartContext  = React.createContext({});

const CartProvider = cartContext.Provider;



const CartContext = ({children}) => {

    
    const [Cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [yaexiste, setYaexiste] = useState(false);

    const addItem = (item,quantity)=>{
        if(isInCart(item)){
            setYaexiste(true)
            setTimeout(() => {
                setYaexiste(false)
            }, 3000);
        }else{

            setCart([...Cart, {
                item,
                quantity
            }])
        }
        
    }
    
    useEffect(()=>{
        checkTotal()

    },[Cart])
    
    
    console.log(Cart)

    const removeItem = (id)=>{

        // console.log(id)
        // console.log(Cart.)
        setCart(Cart.filter(item => item.item._id !== id))

    }

    const clear = ()=>{
        setCart([])
    }

    const checkTotal = ()=>{
        let checkTotal = 0;
        Cart.map(item => {
            checkTotal = checkTotal +(item.item.precio * item.quantity)
            setTotal(checkTotal)
        })
    }


    const isInCart = (item)=>{
        return Cart.some(producto => producto.item._id === item._id )
    }

  return <CartProvider value={{Cart,addItem,removeItem,clear,total,yaexiste}}>

    {children}

  </CartProvider>;
};

export default CartContext;
