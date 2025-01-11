import CheckoutForm from './CheckoutForm'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function Checkout () {
  const { cart } = useContext(CartContext)
  return (
    <div className='d-flex justify-content-center'>
      {cart.length ? <CheckoutForm /> : <h2>agrega productos primero</h2>}
    </div>
  )
}

export default Checkout
