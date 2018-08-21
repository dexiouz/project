import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Body.css'
export default class Body extends Component {
  render() {
    return (
    
      <div className='body-container'>
        <div className='body'>
         <h1>Your Company's  Services Are Needed</h1>
         <h3>Get Notified Of Opportunities That Suit Your Company's Service Description</h3>
        </div>
        <NavLink to='./Signup' ><input type="submit" name="" value="Register my company" /></NavLink>
      </div>
    )
  }
}


{/* <p className='p'>The Lf internship program, a yearly Give-back to the society programme courtesy of  <a href='#'>Learnfactory Nigeria</a> is hosts to some of the most diversified individuals   from different walks of life, tribe, background and personality. </p>
<p className='p'>Here, we give you a peep to meet with these interns.</p> */}