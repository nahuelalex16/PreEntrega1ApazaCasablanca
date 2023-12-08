import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => { 

    const { id } = useParams();
    const getProducto = async () =>{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
    
        return data
    };

    const [producto, setProducto] = useState([]);

    useEffect(() => {
      getProducto().then((producto) => setProducto(producto))
    }, []);

  return (
    <ItemDetail producto = {producto}/>
  )
}

export default ItemDetailContainer