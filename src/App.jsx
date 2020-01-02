import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import 'semantic-ui-css/semantic.min.css'

//Importing Components
import Landing from './components/Landing/'
import NavBar from './components/NavBar/'

function App() {
  

  return (
    <main>
      
    <NavBar/>
    <Landing/>
    </main>
  );
}

export default App;
