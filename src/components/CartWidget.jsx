import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function CartWidget () {
  const { getQuantity } = useContext(CartContext)

  return (
    <Button variant="light">
      🛒 <Badge bg="secondary">{getQuantity()}</Badge>
    </Button>
  )
}

export default CartWidget
