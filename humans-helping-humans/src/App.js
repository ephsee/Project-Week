import './App.css'
import React from "react"
import {Route, Switch, NavLink, useHistory} from "react-router-dom"
import About from './About'
import StoriesList from './StoriesList'
import Resources from './Resources'
import Home from './Home'

function App() {

  return (
    <div className="App App-header">
      <div>
        <NavBar />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/storieslist">
                <StoriesList />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
          </Switch>
      </div>
    </div>

  );
}

export default App;

const linkStyles = {
  display: "inline-block",
  borderRadius: "20px",
  width: "500px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#9B2226",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
    <div>
        <div>
          <HomeButton />
        </div>
        <div>
          <NavLink
            to="/about"
            exact
            style={linkStyles}
          >
            About
          </NavLink>
          <NavLink
            to="/storieslist"
            exact
            style={linkStyles}
          >
            Stories List
          </NavLink>
          <NavLink
            to="/resources"
            exact
            style={linkStyles}
          >
            Resources
          </NavLink>
        </div>
      </div>
  );
}

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <p style={linkStyles} type="button" onClick={handleClick}>Home </p>
  )
}