import React, { Component } from 'react';




class Avatar extends Component{
  render(){
    return(
      <img style={{width: '37px', height: '37px', marginRight: '7px'}} src={this.props.image} alt={this.props.username} />
    )

  }
}

export default Avatar;