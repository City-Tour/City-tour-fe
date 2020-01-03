import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { AuthContext } from './components/Contexts/AuthContext'
import { axiosWithAuth } from './utils/axiosWithAuth'
import PrivateRoute from './utils/PrivateRoute'

//Importing Components
import Landing from './components/Landing/'
import NavBar from './components/NavBar/'
import Login from './components/Login/'
import SignUp from './components/Signup/'
import CityPage from './components/CityPage/'
import Packages from './components/Packages'
import User from './components/User'
import AddPackage from './components/Forms/AddPackageForm'

function App() {
  const[user,setUser]=useState()
  const user_id = id => {
    setUser(id)
  }
  return (
    <main>
      <AuthContext.Provider value={{user_id,user}}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path ="/packages/add" component={AddPackage}/>
            <Route path="/user" component={User} />
            <Route path="/:id" component={CityPage} />
            <Route path="/packages/:id" component={Packages} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </main>
  )
}

export default App
