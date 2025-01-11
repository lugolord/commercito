import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

function NavBar () {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">TeLoTengo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/category/smartphones">smartphones</Nav.Link>
          <Nav.Link as={Link} to="/category/laptops">laptops</Nav.Link>
        </Nav>
        <Link to='/cart'>
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  )
}

export default NavBar
