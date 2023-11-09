import React from 'react'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => { 

  const getProductos = async () =>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return data
  };

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos().then((productos) => setProductos(productos))
  }, []);

  return (
    <ItemDetail productos = {productos}/>
  )
}

export default ItemDetailContainer