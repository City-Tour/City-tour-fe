import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import 'semantic-ui-css/semantic.min.css'

//Importing Components
import Landing from './components/Landing/'
import NavBar from './components/NavBar/'
import Login from './components/Login/'
import SignUp from './components/Signup/SignUp';
function App() {
  

  return (
    <Router>
    <main>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path='/login' component={Login}/> 
    <Route path='/signup' component={SignUp}/>   
    </Switch>
    </main>
    </Router>
  );
}

export default App;
