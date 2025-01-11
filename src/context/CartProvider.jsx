/* eslint-disable react/prop-types */
import { CartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) => setCart([...cart, item])

  const getQuantity = () => {
    const cantidades = cart.map(item => item.qty)
    const totalProucts = cantidades.reduce((acc, current) => acc + current, 0)
    
    return totalProucts
  }

  const getTotal = () => {
    const cantidades = cart.map(item => item.qty*item.price)
    const totalCompra = cantidades.reduce((acc, current) => acc + current, 0)
    
    return totalCompra
  }

  const emptyCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
