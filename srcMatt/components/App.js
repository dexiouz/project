import React, { Component } from 'react';
import { Switch,Route} from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';
import My404 from './My404';
import contents from '../data';

class App extends Component {
  state = {
    comments: []
  }
  componentDidMount(){
    const comments = this.state.comments;
    comments.push(contents);
    this.setState({comments:comments});
  }
  render() { 
    const {comments} = this.state
      return (  
      <main>
        <Switch>
          {/* <Route exact path='/home' component = {Home}/> */}
          <Route  exact path='/' component = {Home} />
          <Route  path='/productlist' component = {ProductList} />
          {/* <Route  path='/productid' component = {Product}/>  */}
          <Route path = '/product' component = {(props)=> <Product data = {comments} {...props} />} />
          {/* <Route path='/productid' component = {} /> */}
          <Route path = '/*' component = {My404} />
        </Switch>
      </main>
    );
  }
}

export default App;


