import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => { 

  const getProductos = async () =>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return data
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((productos) => setProductos(productos))
  }, []);

  return (
    <ItemDetail productos = {productos}/>
  )
}

export default ItemDetailContainer