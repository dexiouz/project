import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Body.css'
export default class Body extends Component {
  render() {
    return (
    
      <div className='body-container'>
        <div className='body'>
          <p className='p'>The Lf internship program, a yearly Give-back to the society programme courtesy of  <a href='#'>Learnfactory Nigeria</a> is hosts to some of the most diversified individuals   from different walks of life, tribe, background and personality. </p>
          <p className='p'>Here, we give you a peep to meet with these interns.</p>
        </div>
        <NavLink to='./Profiles' ><input type="submit" name="" value="Get Started" /></NavLink>
      </div>
      

      

    )
  }
}