import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const MyNav = function () {
  return (
    // Navbar: bg scuro, testo chiaro, si “chiude” sotto lg (>=992px resta aperta)
    <Navbar bg="dark" variant="dark" expand="lg" className=" pt-2 pb-4">
      {/* Container fluid = prende tutta la larghezza, px-4 = padding laterale */}
      <Container fluid className="px-4">
        {/* logo netflix */}
        <Navbar.Brand href="#home" className="py-0">
          <img src="/img/logo.png" alt="Netflix logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>

        {/* Bottone hamburger che appare sotto lg */}
        <Navbar.Toggle aria-controls="main-nav" />

        {/* Contenuto che si apre/chiude con l’hamburger */}
        <Navbar.Collapse id="main-nav">
          {/* Link a sinistra (me-auto = spinge tutto il resto a destra) */}
          <Nav className="me-auto small">
            <Nav.Link href="#home" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recent">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>

          {/* Icone a destra */}
          <div className="d-flex align-items-center gap-3 text-light">
            {/* icona ricerca */}
            <i className="bi bi-search fs-5" style={{ cursor: "pointer" }} />

            {/* scritta KIDS */}
            <div id="kids" className="fw-bold">
              KIDS
            </div>

            {/* campanella notifiche */}
            <i className="bi bi-bell fs-5" style={{ cursor: "pointer" }} />

            {/* icona profilo */}
            <i className="bi bi-person-circle fs-5" style={{ cursor: "pointer" }} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
