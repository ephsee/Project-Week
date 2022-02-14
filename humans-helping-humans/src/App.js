import './App.css'
import React from "react"
import {Route, Switch, NavLink} from "react-router-dom"
import About from './About'
import StoriesList from './StoriesList'
import Resources from './Resources'
import Home from './Home';

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
  width: "500px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/storieslist"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Stories List
      </NavLink>
      <NavLink
        to="/resources"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Resources
      </NavLink>
    </div>
  );
}
