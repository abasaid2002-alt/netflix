const MovieCard = (props) => {
  return (
    <img
      // poster che arriva dall’API
      src={props.movie.Poster}
      alt={props.movie.Title}
      // bootstrap: immagine responsive, larga quanto la colonna, angoli arrotondati
      className="img-fluid w-100 rounded"
      style={{
        // altezza fissa così tutte le card sono uguali
        height: "250px",
        // contain = non lo taglia
        objectFit: "contain",
        // sfondo per “riempire” lo spazio vuoto quando l’immagine non riempie tutto
        backgroundColor: "#212529",
        // bordo leggero per staccare dal background
        border: "1px solid rgba(255,255,255,0.08)",
        // animazione quando passo con il mouse sopra le card
        transition: "transform 0.5s",
        cursor: "pointer",
      }}
      // quando passo col mouse sopra, ingrandisco leggermente l’immagine
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      // quando tolgo il mouse, torno alla dimensione normale
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  )
}

export default MovieCard
