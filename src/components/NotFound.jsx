import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const NotFound = () => {
  return (
    <Container className="text-center text-light mt-5">
      {/* qui avviso che non esiste */}
      <h1>404</h1>
      <p className="text-secondary">Pagina non trovata</p>

      {/* qui torno a casa */}
      <Button as={Link} to="/" variant="danger">
        Torna alla Home
      </Button>
    </Container>
  )
}

export default NotFound
