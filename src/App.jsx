import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';


//Importing Components
import Landing from './components/Landing/'
import NavBar from './components/NavBar/'
import Login from './components/Login/'
import SignUp from './components/Signup/';
import CityPage from './components/CityPage/'
function App() {
  

  return (
    <Router>
    <main>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path='/login' component={Login}/> 
    <Route path='/signup' component={SignUp}/> 
    <Route path='/:id' component={CityPage}/>  
    </Switch>
    </main>
    </Router>
  );
}

export default App;
