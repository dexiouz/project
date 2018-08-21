import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Details.css'
export default class Body extends Component {
  render() {
    return (
    
      <div className='main'>
        <div className='main2'>
          <div className="inner">
          
          </div>      
          <div className="outer">
          <NavLink to='./Profiles' > <input type="button" name="" value='person name' /></NavLink>
          </div>   
        
        </div>
    </div>
      

      

    )
  }
}