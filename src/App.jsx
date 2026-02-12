import { BrowserRouter, Routes, Route } from "react-router-dom"

import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"

import Home from "./components/Home"
import TVShows from "./components/TVShows"
import MovieDetails from "./components/MovieDetails"
import NotFound from "./components/NotFound"

function App() {
  return (
    // qui abilito il router
    <BrowserRouter>
      {/* qui tengo nav/footer fissi */}
      <div className="bg-dark min-vh-100 d-flex flex-column">
        <MyNav />

        {/* qui cambiano le pagine */}
        <div className="flex-grow-1">
          <Routes>
            {/* qui mostro home */}
            <Route path="/" element={<Home />} />

            {/* qui mostro tv shows */}
            <Route path="/tv-shows" element={<TVShows />} />

            {/* qui mostro dettagli con parametro */}
            <Route path="/movie-details/:movieId" element={<MovieDetails />} />

            {/* qui gestisco 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
