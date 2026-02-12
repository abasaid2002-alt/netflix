import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
  // qui scelgo il poster
  const poster = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Poster"

  return (
    // qui rendo tutta la card cliccabile
    <Card as={Link} to={`/movie-details/${movie.imdbID}`} bg="dark" text="light" className="text-decoration-none h-100 border-secondary">
      <Card.Img
        src={poster}
        alt={movie.Title}
        className="img-fluid w-100 rounded"
        style={{
          height: "200px", // qui la faccio più piccola
          objectFit: "contain",
          backgroundColor: "#212529",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "transform 0.5s",
          cursor: "pointer",
        }}
        // qui faccio hover
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <Card.Body className="p-2">
        <Card.Title className="fs-6 m-0 text-truncate">{movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
