import './App.css'
import React from "react"
import {Route, Switch, NavLink, useHistory} from "react-router-dom"
import About from './About'
import StoriesList from './StoriesList'
import Resources from './Resources'
import Home from './Home'

function App() {

  return (
    <div>
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

function NavBar() {
  return (
    <div>
        <div className='links'>
          <HomeButton />
        </div>
        <div >
          <NavLink
            to="/about"
            exact         
            className='links'   
          >
            About
          </NavLink>
          <NavLink
            to="/storieslist"
            exact            
            className='links'
          >
            Stories List  
          </NavLink>
          <NavLink
            to="/resources"
            exact            
            className='links'
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
    <div type="button" onClick={handleClick}>Home </div>
  )
}