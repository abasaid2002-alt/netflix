import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import Gallery from "./components/Gallery"
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <MyNav />
      <Welcome />

      <Gallery title="Trending Now" query="harry potter" />
      <Gallery title="Watch it Again" query="lord of the rings" />
      <Gallery title="New Releases" query="game of thrones" />

      <MyFooter />
    </div>
  )
}

export default App
