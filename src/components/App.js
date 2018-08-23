import React, {Component} from'react';
import Header from './Header';
import Body from './Body';
import '../styles/App.css';
import Profiles from './Profiles'
class App extends React.Component{
  render(){
    return(
      <div  className='container'>
        <div className="top">
         {/* <Header /> */}
         <Body />
         
        </div>
      </div>
    )
  }
}

 export default App;


