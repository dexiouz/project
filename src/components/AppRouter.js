import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Profiles from './Profiles'
import Signup from './Signup';
import Details from './Details'
// import '../styles/Signup.css';
// import '../styles/App.css';
// import '../styles/Login.css';
const AppRouter = () => [
  <BrowserRouter>
    <div>
      <Switch>

        <Route path ='/' component ={Login} exact ={true}/>
        <Route path ='Login' component ={Login} exact ={true}/>
        <Route path ='/App' component ={App}/>
        <Route path ='/Signup' component ={Signup}/> 
        <Route path ='/Profiles' component ={Profiles}/> 
        <Route path ='/Details' component ={Details}/> 

        {/* <Route path ='/' component ={Profiles} exact ={true}/>
        <Route path ='Profiles' component ={Profiles} exact ={true}/> */}
        
      </Switch>  
    </div>
  </BrowserRouter>
]
export default AppRouter