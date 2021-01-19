import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
