import React, {Component} from'react';

export default class Backend extends React.Component{
  state = {
    username: '',
    email: '',
    password: '',
    error: {
      usernameError: 'hi',
      passwordError: '',
      emailError: ''
    }
  }

  submit=(e)=>{
    let {username,email, password}= this.state;
    let {usernameError, emailError, passwordError} = this.state.error;
    e.preventDefault()
    !username ? this.setState=({
      usernameError: 'empty username'
    })
    :!email ? this.setState({
      emailError: 'empty email'
    })
    :!password ? this.setState({
      passwordError: 'empty password'
    })
    : fetch('http://localhost:5000/Backend',{
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Applicatiom/json'
      },
      body: JSON.stringify({ 
        username,
        email,
        password
       })
    }).then((response) => {return response.json()})
      .then((res) => { 
        if (res.message==='empty') {
          alert('input empty')
      }
      else{
        console.log(res.message)
      }
    })
      .catch((error) => console.log('An error occured', error))
        console.log(username)
      this.setState({ username: '', email:'', password:''})
  }

  handleChange=({target})=>{
    let {value, name} = target
    this.setState({[name]: value})
  }
  render(){
    let {username, email, password,error} = this.state;
    let {usernameError, emailError, passwordError} = this.state.error;
    return(
      <div style={{display: 'flex', justifyContent:'row', margin: 30}}>
        <form  onChange={this.handleChange} onSubmit={this.submit} >
          <input type="text" value={username}  placeholder= 'username' name= 'username' style={{height: 30, margin:20,border:'1px solid #000', borderRadius: 5 }}/>
          <p>{usernameError}</p>
          <input type="text" value={email}  placeholder= 'email' name= 'email' style={{height: 30, margin:20,border:'1px solid #000', borderRadius: 5 }}/>
          <p>{emailError}</p>
          <input type="password" value={password}  placeholder= 'password' name= 'password' style={{height: 30, margin:20,border:'1px solid #000', borderRadius: 5 }}/>
          <p>{passwordError}</p>
          
          <button style={{margin:20,}}>Click me</button>
          
        </form>
      </div>
    )
  }
}