import React, { Component } from 'react';
import '../styles/Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h2 className='h2'>LfIp</h2>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">What we do</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">FAQ</a></li>
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