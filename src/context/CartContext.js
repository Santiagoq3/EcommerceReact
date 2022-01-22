
import React, { useState } from 'react';

export const cartContext  = React.createContext({});

const CartProvider = cartContext.Provider;



const CartContext = ({children}) => {

    
    const [Cart, setCart] = useState([]);


    const addItem = (item,quantity)=>{

        setCart([...Cart, {
            item,
            quantity
        }])

    }


    const removeItem = (id)=>{


        setCart(Cart.filter(item => item.id !== id))

    }

    const clear = ()=>{
        setCart([])
    }


    const isInCart = ()=>{

    }

  return <CartProvider value={{Cart,addItem,removeItem,clear}}>

    {children}

  </CartProvider>;
};

export default CartContext;
