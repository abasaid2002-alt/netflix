import Dropdown from "react-bootstrap/Dropdown"

const Welcome = () => {
  return (
    // container-fluid = larghezza piena, px-4 = padding laterale, px-lg-5 = padding un po’ più grande da lg in su
    <div className="container-fluid px-4 px-lg-5">
      {/* riga principale: titolo a sinistra + bottoni a destra */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        {/* lato sinistro: titolo + dropdown */}
        <div className="d-flex align-items-center gap-3">
          {/* titolo della sezione */}
          <h2 className="h3 m-0">TV Shows</h2>

          {/* dropdown per scegliere i generi */}
          <Dropdown>
            {/* bottone che apre/chiude il menu */}
            <Dropdown.Toggle variant="outline-light" size="sm">
              Genres
            </Dropdown.Toggle>

            {/* menu con le opzioni */}
            <Dropdown.Menu>
              <Dropdown.Item href="#action">Action</Dropdown.Item>
              <Dropdown.Item href="#comedy">Comedy</Dropdown.Item>
              <Dropdown.Item href="#drama">Drama</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* due bottoni lato destro */}
        <div className="btn-group" role="group" aria-label="Layout buttons">
          {/* bottone uno */}
          <button className="btn btn-outline-light btn-sm" type="button" aria-label="Grid view">
            <i className="bi bi-grid"></i>
          </button>

          {/* bottone due */}
          <button className="btn btn-outline-light btn-sm" type="button" aria-label="Compact view">
            <i className="bi bi-grid-3x3-gap"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
