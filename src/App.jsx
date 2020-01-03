import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import {AuthContext} from'./components/Contexts/AuthContext'
import {axiosWithAuth} from './utils/axiosWithAuth'
import PrivateRoute from './utils/PrivateRoute'

//Importing Components
import Landing from './components/Landing/'
import NavBar from './components/NavBar/'
import Login from './components/Login/'
import SignUp from './components/Signup/';
import CityPage from './components/CityPage/'
import Packages from './components/Packages'

function App() {


  

  return (
    <main>
    <AuthContext.Provider>
      <Router>
      
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path='/login' component={Login}/> 
      <Route path='/signup' component={SignUp}/> 
      <Route path='/:id' component={CityPage}/>
      <Route path="/packages" component={Packages} />
      </Switch>
      
      </Router>
    </AuthContext.Provider>
    </main>
  );
}

export default App;
