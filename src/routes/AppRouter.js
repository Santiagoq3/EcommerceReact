import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Cart } from '../components/catalogo/Cart'
import { Checkout } from '../components/catalogo/Checkout'
import { ItemDetailContainer } from '../components/catalogo/ItemDetailContainer'
import { ItemListContainer } from '../components/catalogo/ItemListContainer'
import Navbar from '../components/ui/Navbar'


export const AppRouter = () => {
    return (
        <BrowserRouter>
           <Navbar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer greeting={"Este es mi catalog, Bienvenidos!!"} />   } />
                <Route exact path="/EcommerceReact" element={<ItemListContainer greeting={"Este es mi catalogo, Bienvenidos!!"} />   } />
                <Route exact path="/category/:id" element={<ItemListContainer greeting={"Este es mi categoria, Bienvenidos!!"} />  } />
                <Route exact path="/item/:id" element={<ItemDetailContainer />   } />
                <Route exact path="/cart" element={<Cart />   } />
                <Route exact path="/checkout" element={<Checkout />   } />
            </Routes>
        </BrowserRouter>
    )
}
