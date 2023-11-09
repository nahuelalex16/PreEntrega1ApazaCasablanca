import React from 'react'
import { Heading } from '@chakra-ui/react'
import ItemList from "./ItemList"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const getProductos = async () =>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return data
  };

  const [productos, setProductos] = useState([])
  const {categoria} = useParams()

  useEffect(() => {
    getProductos().then((productos) => setProductos(productos))
  }, []);

  const categoriaFiltro = productos.filter((producto) => producto.category === categoria)

  return (
    <div>
      {categoria ? <ItemList catalogo={categoriaFiltro}/> : <ItemList catalogo={productos}/>}
    </div>

    
  )
}

export default ItemListContainer