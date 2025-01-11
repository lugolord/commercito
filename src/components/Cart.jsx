import CartItems from './CartItems'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function Cart () {
  const { cart, getTotal } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div>no tienes productos en el carrito 😿</div>
    )
  } 

  return (
    <div className='d-flex flex-column align-items-center'>
      <CartItems items={cart} />
      <p className='mt-3 fw-bold'>Total: {getTotal()}</p>
      <Button 
        variant='success' 
        className='w-50 mt-3'
        as={Link}
        to='/checkout'
      >
        finalizar compra
      </Button>
    </div>
  )
}

export default Cart
