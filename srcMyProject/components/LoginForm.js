import React from 'react'
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Formvalid from './Formvalid';





class LoginForm extends React.Component {
constructor(props){
  super(props);
  this.state={
    
  }
}
  login = () =>{
    let username= this.state.username
    let password= this.state.password
    let regUserName = /[a-z,0-9]/g
    // let regPassword = 3628670
    // alert('i am bobito')
    if(username === '' || !username || username.length < 8){
     
      alert('username must not be empty and it must be at least 8 characters')
    }else if(!username.match(regUserName)){
      alert('wrong admin username')
    }else if (password === '' || !password){
      alert('empty password')
    }else if(!password.includes(3628670)){
      alert('wrong admin password')
    }else{
      window.location.href = "/Admin-portal"
      alert('welcome')
    }
  }
  handleChange=({target})=>{
     let {value,name} = target
     this.setState({[name]:value})
  }
  render(){
    let {username}= this.state;
    
    return(
      <div className='login-form'>
  
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450, marginTop: '9rem', marginRight: '1rem' }}>
        <Header as='h2' color='orange' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large' onChange={this.handleChange}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' name="username"  placeholder='Username'  id='login' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name='password'
              placeholder='Password'
              type='password'
            />
            
            
            <a  className='Nav'><Button color='orange' fluid size='large' onClick={this.login}>
              Login
            </Button></a>
            {/*<Button size='small' color='green'>
              <Icon name='download' />
              Download
    </Button>*/}
          </Segment>
        </Form>
        {/*<Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>*/}
      </Grid.Column>
    </Grid>

  </div>
    )
  }
}

export default LoginForm