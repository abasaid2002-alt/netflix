import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, NavLink } from "react-router-dom"

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="pt-2 pb-4">
      <Container fluid className="px-4">
        {/* qui vado alla home cliccando il logo */}
        <Navbar.Brand as={Link} to="/" className="py-0">
          <img src="/img/logo.png" alt="Netflix logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            {/* qui evidenzio il link attivo */}
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            {/* qui vado ai tv shows */}
            <Nav.Link as={NavLink} to="/tv-shows">
              TV Shows
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3 text-light">
            <i className="bi bi-search fs-5" style={{ cursor: "pointer" }} />
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell fs-5" style={{ cursor: "pointer" }} />
            <i className="bi bi-person-circle fs-5" style={{ cursor: "pointer" }} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
