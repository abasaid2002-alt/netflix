import { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SearchBar from "./SearchBar"
import Gallery from "./Gallery"

const TVShows = () => {
  // qui metto la query iniziale
  const [query, setQuery] = useState("friends")

  return (
    <>
      <Container fluid className="px-4 px-lg-5 mt-3">
        <Row className="align-items-center g-2">
          <Col xs={12} md="auto">
            <h2 className="mb-0 text-light">TV Shows</h2>
          </Col>

          <Col xs={12} md>
            {/* qui cerco serie */}
            <SearchBar placeholder="Cerca Serie TV..." defaultValue={query} onSearch={(q) => setQuery(q || "friends")} />
          </Col>
        </Row>
      </Container>

      {/* qui faccio vedere più risultati */}
      <Gallery title={`Risultati per: ${query}`} query={query} type="series" limit={12} />
    </>
  )
}

export default TVShows
