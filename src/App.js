import React from 'react'
import "./app.css"
import { ItemListContainer } from './components/catalogo/ItemListContainer'
import CartContext from './context/CartContext'
import { AppRouter } from './routes/AppRouter'

const App = () => {
  return (

    <CartContext >

      <AppRouter>
    
      </AppRouter>
    </CartContext>
  )
}

export default App
