// src/omdbConfig.js

// qui tengo le chiavi e gli url
const OMDB_KEY = "1ce61c"
const OMDB_URL = "https://www.omdbapi.com/"

// Token JWT per autenticarmi nelle chiamate API (va messo nell'header Authorization)
export const STRIVE_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0YWI2ZjgwMjA2ODAwMTUwNGRjOGEiLCJpYXQiOjE3NzAzMDIzMTksImV4cCI6MTc3MTUxMTkxOX0._tDJLP2qDnII7_TRQ0Be7gHqzrI4ExAJSTvXNwrEJCQ"

// URL base dell'endpoint commenti (poi ci aggiungo asin o id commento)
export const STRIVE_URL = "https://striveschool-api.herokuapp.com/api/comments/"

const auth = { Authorization: STRIVE_TOKEN }

// qui faccio una fetch e prendo il json
const getJson = async (url, options) => {
  const resp = await fetch(url, options)
  return resp.json()
}

// ========= OMDB =========

// qui cerco film/serie
export const omdbSearch = async (query, type) => {
  const url = `${OMDB_URL}?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}` + (type ? `&type=${type}` : "")

  const data = await getJson(url)

  if (data.Response === "False") throw new Error(data.Error || "Nessun risultato")
  return data.Search || []
}

// qui prendo i dettagli di un film
export const omdbById = async (id) => {
  const url = `${OMDB_URL}?apikey=${OMDB_KEY}&i=${id}&plot=full`
  const data = await getJson(url)

  if (data.Response === "False") throw new Error(data.Error || "Film non trovato")
  return data
}

// ========= STRIVE COMMENTS =========

// qui prendo i commenti di un film (elementId = imdbID)
export const getComments = async (elementId) => {
  const resp = await fetch(`${STRIVE_URL}/${elementId}`, { headers: auth })
  if (!resp.ok) throw new Error("Errore commenti")
  return resp.json()
}

// qui aggiungo un commento
export const addComment = async (elementId, comment, rate) => {
  const resp = await fetch(STRIVE_URL, {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({ elementId, comment, rate }),
  })
  if (!resp.ok) throw new Error("Errore invio commento")
  return resp.json()
}

// qui elimino un commento
export const deleteComment = async (commentId) => {
  const resp = await fetch(`${STRIVE_URL}/${commentId}`, {
    method: "DELETE",
    headers: auth,
  })
  if (!resp.ok) throw new Error("Errore eliminazione")
}
