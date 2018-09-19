import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header';
import '../styles/Signup.css';
import { NavLink } from 'react-router-dom';
let uDatabase = [];

class Signup extends React.Component {
	constructor(props){
		super(props)
		this.state={
		
		}
	}
getValues=(e)=>{
	const 
	username = document.getElementById('username').value,
  email = document.getElementById('email').value,
	password = document.getElementById('password').value,
	comfirmpassword = document.getElementById('comfirmpassword').value;

	return ({username, email, password, comfirmpassword})
}

signup=(e)=>{
	e.preventDefault()
	console.log('hi')
	let {username, email, password, comfirmpassword}  = this.state
	
		!username ? alert('invalid name') 
		:!email || email.length <1 ? alert('enter valid mail')
		:!password || password === '' ||password.length < 1 ? alert('invalid password') 
		:comfirmpassword !== password ? alert('passwords do not match')
		:axios({
			method: 'post',
			url: 'http: localhost:5000/saveinfo',
			data: {
				username,
				email,
				password,
			},
		}). then(res => {
			console.log(res)
		})
		// window.location.href = '/Login';
		alert(username, email, password)
		// alert(uDatabase)
}



	handleChange=({target})=>{
		let {value, name} = target
		this.setState({[name]:value})
	}
	render() {
		return (
			<div className='container'>
				<div className="top">
				<div className='signup'>
					<h1>Signup Here</h1>
					<form onChange={this.handleChange} >

						<input type="text" id='username' name='username'  placeholder="Company Name"></input>

						<input type="text" id="email" name="email" placeholder="Company email" />

						<input type="password" id="password" name="password" placeholder="Company Password"></input>

						<input type="password" 	 id="comfirmpassword" 	 name="comfirmpassword" 	 placeholder="Comfirm 	 Password"></input>

						<input type="submit" name="" value="Login" onClick={this.signup} />
						
						 {/* <input type="button" name="" value="Sign up" onClick={this.signup}/> */}
						 
					<NavLink to='./Login' ><a href="#">Already Registered? Login here</a>	</NavLink>

					</form>
				</div>
				</div>
			</div>
		)
	}
}

export default Signup;
