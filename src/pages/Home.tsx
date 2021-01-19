import { useEffect } from "react"
import axios from "axios"

const Home = () => {
  const getNews = async () => {
    const response = await axios.get("/.netlify/functions/getNews")
    console.log(response.data)
  }
  useEffect(() => {
    getNews()
  }, [])

  return <div>Home</div>
}

export default Home
