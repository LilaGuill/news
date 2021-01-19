import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Article from "./pages/Article"
import Home from "./pages/Home"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/article">
            <Article />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
