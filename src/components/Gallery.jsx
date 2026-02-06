import { Component } from "react"
import MovieCard from "./MovieCard"
import { OMDB_API_KEY, OMDB_BASE_URL } from "../omdbConfig"
import Spinner from "react-bootstrap/Spinner"

class Gallery extends Component {
  state = {
    movies: [], // qui salvo i film che arrivano dalla fetch
    isLoading: false, // serve per capire se sto ancora caricando
  }

  componentDidMount() {
    // appena il componente appare in pagina, parto con il loading
    this.setState({ isLoading: true })

    // chiamata all’API OMDb: s= serve per cercare per titolo (query arriva dalle props)
    fetch(OMDB_BASE_URL + "?apikey=" + OMDB_API_KEY + "&s=" + this.props.query)
      .then((resp) => resp.json()) // trasformo la risposta in json
      .then((data) => {
        // se OMDb mi ritorna Search, prendo i primi 6 risultati
        if (data.Search) this.setState({ movies: data.Search.slice(0, 6) })
        // altrimenti metto array vuoto (così non rompe)
        else this.setState({ movies: [] })

        // finito il caricamento: spengo lo spinner
        this.setState({ isLoading: false })
      })
      .catch((err) => {
        // se c’è un errore lo stampo e spengo comunque lo spinner
        console.log(err)
        this.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <div className="container-fluid px-4 px-lg-5 mt-4">
        {/* titolo della sezione es: Trending Now */}
        <h4 className="mb-2">{this.props.title}</h4>

        {/* se sto caricando, mostro lo spinner */}
        {this.state.isLoading && (
          <div className="d-flex justify-content-center my-4">
            <Spinner animation="border" variant="light" />
          </div>
        )}

        {/* quando ho finito, mostro la griglia delle card */}
        {!this.state.isLoading && (
          <div className="row g-2">
            {this.state.movies.map((movie) => (
              // responsive: <768 => 2 per riga, 768+ => 3 per riga, 992+ => 6 per riga
              <div key={movie.imdbID} className="col-6 col-md-4 col-lg-2">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Gallery
