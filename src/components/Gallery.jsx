import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"
import MovieCard from "./MovieCard"
import { omdbSearch } from "../omdbConfig"

export default function Gallery({ title, query, type, limit = 6 }) {
  // qui mi salvo dati + stati
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const load = async () => {
    if (!query) return

    try {
      setLoading(true)
      setError("")
      // qui chiedo i risultati a OMDB
      const list = await omdbSearch(query, type)
      // qui tengo solo i primi "limit"
      setMovies(list.slice(0, limit))
    } catch (e) {
      setError(e.message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [query, type, limit])

  return (
    <Container fluid className="px-4 px-lg-5 mt-4">
      <h4 className="text-light mb-2">{title}</h4>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="light" />
        </div>
      )}

      {!loading && error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Row xs={2} md={3} lg={6} className="g-2">
          {movies.map((m) => (
            <Col key={m.imdbID}>
              <MovieCard movie={m} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}
