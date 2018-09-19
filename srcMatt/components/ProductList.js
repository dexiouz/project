import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
export default class  ProductList extends Component {
  render() { 
    return (  
      <div>
        <h1>hi</h1> 
        <Link to='/'> Go back to Homepage</Link>          
      </div>
    );
  }
}


