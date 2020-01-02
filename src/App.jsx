import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import 'semantic-ui-css/semantic.min.css'

//Importing Components
import Landing from './components/Landing/'

function App() {
  

  return (
    <main>
      
   Hello We are up
     <Landing/>
    </main>
  );
}

export default App;
