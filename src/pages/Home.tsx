import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"
import Articles from "../components/Articles"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

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
      {!isLoading ? (
        <Articles articles={articles} />
      ) : (
        <Loader type="ThreeDots" color="black" height={50} width={50} />
      )}
    </>
  )
}

export default Home
