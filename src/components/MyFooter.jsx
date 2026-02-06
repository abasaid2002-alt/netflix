import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const MyFooter = () => {
  return (
    // footer scuro con un po’ di padding sopra e sotto
    <footer className="bg-dark pt-4 pb-4">
      {/* container fluid = larghezza piena, padding laterale come nel resto della pagina */}
      <Container fluid className="px-4 px-lg-5">
        {/* centro tutto il contenuto */}
        <Row className="justify-content-center">
          {/* colonna “stretta” per non avere footer troppo largo su desktop */}
          <Col xs={12} md={10} lg={8}>
            {/* icone social in alto */}
            <div className="d-flex gap-3 fs-5 mb-3">
              <a href="#fb" className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#ig" className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#tw" className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#yt" className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none">
                <i className="bi bi-youtube"></i>
              </a>
            </div>

            {/* griglia dei link: 2 colonne su mobile, 4 colonne da md in su */}
            <Row xs={2} md={4} className="g-3">
              <Col>
                {/* lista verticale */}
                <ul className="list-unstyled m-0 d-flex flex-column gap-2">
                  <li>
                    <a className="link-secondary text-decoration-none" href="#audio">
                      Audio and Subtitles
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#media">
                      Media Center
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#privacy">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>

              <Col>
                <ul className="list-unstyled m-0 d-flex flex-column gap-2">
                  <li>
                    <a className="link-secondary text-decoration-none" href="#audiodesc">
                      Audio Description
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#investor">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#legal">
                      Legal Notices
                    </a>
                  </li>
                </ul>
              </Col>

              <Col>
                <ul className="list-unstyled m-0 d-flex flex-column gap-2">
                  <li>
                    <a className="link-secondary text-decoration-none" href="#help">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#jobs">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#cookie">
                      Cookie Preferences
                    </a>
                  </li>
                </ul>
              </Col>

              <Col>
                <ul className="list-unstyled m-0 d-flex flex-column gap-2">
                  <li>
                    <a className="link-secondary text-decoration-none" href="#gift">
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#terms">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a className="link-secondary text-decoration-none" href="#corp">
                      Corporate Information
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>

            {/* bottone Service Code sotto i link */}
            <div className="mt-3">
              <Button variant="outline-secondary" size="sm" className="px-3">
                Service Code
              </Button>
            </div>

            {/* copyright in basso */}
            <p className="mt-2 mb-0 small text-secondary">© 1997-2026 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
