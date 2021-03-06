import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Profiles from './Profiles'
import Signup from './Signup';
import Details from './CompanyHeader';
import Header from './Header';
import CompanyDashboard from './CompanyDashboard';
// import '../styles/Signup.css';
// import '../styles/App.css';
// import '../styles/Login.css';
const AppRouter = () => [
  <BrowserRouter>
  
    <div>
    <Header />
      <Switch>

        <Route path ='/' component ={App} exact ={true}/>
        <Route path ='App' component ={App} exact ={true}/>
        <Route path ='/Login' component ={Login}/>
        <Route path ='/Signup' component ={Signup}/> 
        
        <Route path ='/CompanyDashboard' component ={CompanyDashboard}/> 
        <Route path ='/Details' component ={Details}/> 

        {/* <Route path ='/' component ={Signup} exact ={true}/>
        <Route path ='Signup' component ={Signup} exact ={true}/> */}
        
      </Switch>  
    </div>
  </BrowserRouter>
]
export default AppRouter