import React, { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([]);
    const [cantidadProductos, setCantidadProductos] = useState(0);
    
    const existeProducto = (id) => carrito.find(prod => prod.id === id) ? true : false;

    const agregarItem = (producto, cont) => {
        if (existeProducto(producto.id)){
            console.log(existeProducto(producto.id))
            setCarrito(carrito.map((prod => {
                return prod.id === producto.id ? {...prod, cantidad: prod.cantidad+cont} : {...prod};
            })))
        } else {
            setCarrito([...carrito, { producto, cont }])
        }
    }

    const quitarItem = (itemId) => {
        setCarrito(carrito.filter((prod) => prod.id !== itemId))
    }

    const limpiarCarrito = () => setCarrito([]);

    /* useEffect(() => {
        const resumenItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
        setCantidadProductos(resumenItems)
    }, [carrito]) */

    useEffect(() => {
        const resumenItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
        setCantidadProductos(resumenItems)
    }, [])
    
    return (
        <CartContext.Provider value={{carrito, agregarItem, quitarItem, limpiarCarrito, existeProducto , cantidadProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider