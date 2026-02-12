import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import Gallery from "./Gallery"

const Home = () => {
  return (
    <>
      <Container fluid className="px-4 px-lg-5 mt-3 text-light">
        <Row className="align-items-center">
          <Col xs="auto">
            <h2 className="mb-0">Movies</h2>
          </Col>

          <Col xs="auto">
            {/* qui metto il dropdown finto */}
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" size="sm">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      {/* qui mostro 3 gallery */}
      <Gallery title="Trending Now" query="harry potter" />
      <Gallery title="Watch It Again" query="lord of the rings" />
      <Gallery title="New Releases" query="star wars" />
    </>
  )
}

export default Home
