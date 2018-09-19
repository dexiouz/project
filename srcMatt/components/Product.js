import React, { Component } from 'react';
import Products from './Products';
export default class  Product extends Component {
  render() { 
    const {data,match} = this.props;
    // console.log(data);
    const allProducts = data.map(product =>(<Products key={product._id} product = {product}/>))
    return (  
      <div>
       <h1>This is the product</h1>
       {allProducts}
       
      </div>
    );
  }
}


