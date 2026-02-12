import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"

import { omdbById, getComments, addComment, deleteComment } from "../omdbConfig"

export default function MovieDetails() {
  const { movieId } = useParams()

  // qui mi salvo film + commenti
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])

  // qui gestisco stati
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // qui gestisco form
  const [text, setText] = useState("")
  const [rate, setRate] = useState("5")

  // qui tolgo la parte dopo @ (così non mostro email)
  const safeAuthor = (a) => {
    if (!a) return "Utente"
    return a.includes("@") ? a.split("@")[0] : a
  }

  // qui faccio stelle semplici
  const stars = (n) => "★".repeat(Number(n) || 0) + "☆".repeat(5 - (Number(n) || 0))

  const load = async () => {
    try {
      setLoading(true)
      setError("")

      // qui carico film e commenti insieme
      const [m, c] = await Promise.all([omdbById(movieId), getComments(movieId)])
      setMovie(m)

      // qui metto i più recenti sopra
      const sorted = (c || []).slice().sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""))
      setComments(sorted)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [movieId])

  const handleSend = async (e) => {
    e.preventDefault()
    const clean = text.trim()
    if (!clean) return

    try {
      setError("")
      // qui invio il commento
      await addComment(movieId, clean, Number(rate))
      setText("")
      setRate("5")

      // qui ricarico i commenti
      const c = await getComments(movieId)
      const sorted = (c || []).slice().sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""))
      setComments(sorted)
    } catch (e) {
      setError(e.message)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Elimino il commento?")) return
    try {
      setError("")
      await deleteComment(id)

      const c = await getComments(movieId)
      const sorted = (c || []).slice().sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""))
      setComments(sorted)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <Container fluid className="px-4 px-lg-5 mt-3 text-light">
      <Link to="/" className="text-decoration-none text-light opacity-75">
        ← Torna alla Home
      </Link>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="light" />
        </div>
      )}

      {!loading && error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}

      {!loading && movie && (
        <Row className="g-4 mt-2">
          {/* qui faccio la colonna più stretta */}
          <Col xs={12} md={3} lg={2}>
            {/* qui rendo il poster più piccolo */}
            <Card bg="dark" text="light" className="border-secondary mx-auto" style={{ maxWidth: 260 }}>
              <Card.Img
                variant="top"
                src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400x600?text=No+Poster"}
                alt={movie.Title}
                style={{
                  height: "320px", // qui lo rendo più piccolo
                  objectFit: "contain",
                  backgroundColor: "#212529",
                }}
              />
              <Card.Body>
                <Card.Title className="mb-1 fs-6">{movie.Title}</Card.Title>
                <div className="text-secondary small">
                  {movie.Year} • {movie.Runtime}
                </div>

                <div className="mt-2 d-flex flex-wrap gap-1">
                  {(movie.Genre || "")
                    .split(",")
                    .slice(0, 3)
                    .map((g) => (
                      <Badge key={g} bg="secondary">
                        {g.trim()}
                      </Badge>
                    ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={9} lg={10}>
            <Card bg="dark" text="light" className="border-secondary mb-3">
              <Card.Body>
                <h3 className="mb-2">Dettagli</h3>
                <p className="text-secondary mb-0">{movie.Plot}</p>
              </Card.Body>
            </Card>

            <Card bg="dark" text="light" className="border-secondary">
              <Card.Body>
                <h3 className="mb-3">Commenti</h3>

                <Form onSubmit={handleSend} className="d-flex gap-2 flex-wrap">
                  <Form.Control placeholder="Scrivi un commento..." value={text} onChange={(e) => setText(e.target.value)} />

                  <Form.Select style={{ maxWidth: 120 }} value={rate} onChange={(e) => setRate(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>

                  <Button type="submit" variant="danger">
                    Invia
                  </Button>
                </Form>
              </Card.Body>

              {comments.length === 0 ? (
                <div className="text-secondary px-3 pb-3">Nessun commento.</div>
              ) : (
                <ListGroup variant="flush">
                  {comments.map((c) => (
                    <ListGroup.Item key={c._id} className="bg-dark text-light border-secondary">
                      <div className="d-flex justify-content-between gap-3">
                        <div>
                          <div className="fw-bold">
                            {/* qui mostro solo il nome (no email) */}
                            {safeAuthor(c.author)} <span className="text-secondary small">{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : ""}</span>
                          </div>

                          <div>{c.comment}</div>

                          <div className="text-warning">
                            {stars(c.rate)} <span className="text-secondary">{c.rate}/5</span>
                          </div>
                        </div>

                        <Button size="sm" variant="outline-secondary" onClick={() => handleDelete(c._id)} title="Elimina">
                          <i className="bi bi-trash" />
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}
