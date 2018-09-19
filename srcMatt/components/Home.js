import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import User from './User';
export default class Home extends Component{
    render(){
        return(
            <div>
                <h2>Home Page</h2>
                <Route exact path='/user' component = {Home}/>
            </div>
        );
    }
}


