import { useEffect, useState } from "react"
import axios from "axios"

import Articles from "../../components/Articles"
import Menu from "../../components/Menu"
import Loading from "../../components/Loading"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState("")

  const getNews = async () => {
    const res = await axios.get("/.netlify/functions/getNews")
    setArticles(res.data.response)
    setIsLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <>
      <Menu
        setArticles={setArticles}
        setIsLoading={setIsLoading}
        category={category}
        setCategory={setCategory}
      />
      {!isLoading ? <Articles articles={articles} /> : <Loading />}
    </>
  )
}

export default Home
