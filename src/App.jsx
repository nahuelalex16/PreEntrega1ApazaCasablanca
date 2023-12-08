import * as React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import CartProvider from './context/CartProvider'

const App = () => {
  return (
    <>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/carrito" element={<Cart/>}/>
      </Routes>
    </CartProvider>
    </>
  )
}

export default App
