import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h2 className='h2'>LfIp</h2>
        <nav>
          <ul>
          <NavLink to='/' ><li><a href="">Home</a></li></NavLink>
            <li><a href="">Companies</a></li>
            <li><a href="">Contact us</a></li>
            <NavLink to='./Login' ><li><a href="">Login</a></li></NavLink>
          </ul>
        </nav>
        <form className='form'>
          <input type='search'
            id="searchInput"
            placeholder="Search an Intern" />
        </form>
      </div>
    )
  }
} 