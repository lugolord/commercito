/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Item ({ item }) {
  const navigate = useNavigate()

  return (
    <Col lg={3}>
      <Card>
        <Card.Img variant="top" src={item.url} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Title>category: {item.category}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            $ {item.price}
          </Card.Text>
          <Button variant='primary' onClick={() => navigate(`/item/${item.id}`)}>ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item
