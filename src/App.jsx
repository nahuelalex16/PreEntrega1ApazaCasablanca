import * as React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" elememnt={<ItemDetailContainer/>}/>
      </Routes>
    </>
  )
}

export default App
