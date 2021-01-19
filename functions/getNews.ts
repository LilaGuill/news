require("dotenv").config()
import axios from "axios"

export async function handler() {
  try {
    const url = `http://newsapi.org/v2/top-headlines?country=fr&apiKey=${process.env.API_KEY}`
    const response = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.data.articles }),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}