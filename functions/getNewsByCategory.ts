require("dotenv").config()
import axios from "axios"

export async function handler(event) {
  const category = event.queryStringParameters.category
  const search = event.queryStringParameters.search

  try {
    const url = `http://newsapi.org/v2/top-headlines?${
      search && `q=${search}`
    }&country=fr&${category && `category=${category}`}&apiKey=${
      process.env.API_KEY
    }&pageSize=100`

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
