import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const SearchBar = ({ placeholder, onSearch, defaultValue = "" }) => {
  // qui mi salvo il testo che scrivo
  const [value, setValue] = useState(defaultValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    // qui mando la query al padre
    onSearch(value.trim())
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex gap-2">
      <Form.Control
        type="search"
        placeholder={placeholder}
        // qui collego input allo state
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="outline-light">
        Cerca
      </Button>
    </Form>
  )
}

export default SearchBar
