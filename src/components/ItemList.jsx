/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'

function ItemList ({ items }) {
  return (
    <Container className='p-3'>
      <Row className='g-3'>
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  )
}

export default ItemList
