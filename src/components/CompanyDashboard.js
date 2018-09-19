import React, { Component } from 'react';
import '../styles/Profiles.css';
import Profiles from './Profiles'
import CompanyHeader from './CompanyHeader'
import Body from './Body';
// import '../styles/Login.css';
import '../styles/Header1.css'
import { NavLink } from'react-router-dom';
export default class Companydashboard extends React.Component{
  render() {
    let uname = localStorage.getItem('uname')
    alert(uname)
    return(
      <div>
        <CompanyHeader/>
        <Profiles />
        </div>
      
    )
  }
}