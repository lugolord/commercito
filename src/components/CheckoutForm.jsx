import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createOrder } from '../firebase/db'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'

function CheckoutForm () {
  const { getTotal, cart } = useContext(CartContext)

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    const [email, name, phone] = form

    const order = {
      buyer: {name: name.value, email: email.value, phone: phone.value},
      total: getTotal(),
      items: cart,
      time: serverTimestamp()
    }

    createOrder(order)
  }

  return (
    <Form className='w-25 mt-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="pepito@gmail.com" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="pepito perez" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="+5491123456567" required />
      </Form.Group>
      
      <Button variant="dark" type="submit" className='w-100'>
        dame mis productos 🎉
      </Button>
    </Form>
  )
}

export default CheckoutForm