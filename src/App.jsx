import * as React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    <>
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a mi tienda virtual"}/>
    </ChakraProvider>
    </>
  )
}

export default App