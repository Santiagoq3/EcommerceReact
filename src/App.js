import React from 'react'
import Navbar from './components/ui/Navbar'
import "./app.css"
import { ItemListContainer } from './components/catalogo/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Este es mi catalog, Bienvenidos!!"} />
    </div>
  )
}

export default App
