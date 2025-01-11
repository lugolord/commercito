/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'

function ItemCount ({ item }) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart({...item, qty: count})
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} disabled={count < 1}>-</button>
      <button onClick={handleAddToCart} disabled={count < 1}>add to cart</button>
    </div>
  )
}

export default ItemCount
