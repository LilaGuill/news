import { useState } from "react"
import axios from "axios"
import { StyledSearch } from "./StyledSearch"

type HandleChange = React.FormEvent<HTMLInputElement>

type SearchType = {
  setArticles: React.Dispatch<React.SetStateAction<never[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  category: string
}

const Search = ({ setArticles, category, setIsLoading }: SearchType) => {
  const [search, setSearch] = useState("")

  const handleChange = ({ currentTarget: { value } }: HandleChange) => {
    setSearch(value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (search) {
      setIsLoading((prevState) => !prevState)
      const res = await axios.get(
        `/.netlify/functions/getNewsByCategory?search=${search}${
          category && `&category=${category}`
        }`
      )
      setArticles(res.data.response)
      setIsLoading((prevState) => !prevState)
      setSearch("")
    }
  }

  return (
    <StyledSearch>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Votre recherche"
          type="text"
          value={search}
          onChange={handleChange}
        ></input>
        <button type="submit">Rechercher</button>
      </form>
    </StyledSearch>
  )
}

export default Search
