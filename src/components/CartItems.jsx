/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import CartItem from './CartItem'

function CartItems ({ items }) {
  return (
    <div className='d-flex flex-column align-items-center mt-5 w-100'>
      <ListGroup className='w-50'>
        {items.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </ListGroup>
    </div>
  )
}

export default CartItems
