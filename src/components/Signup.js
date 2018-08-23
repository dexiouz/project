import React, { Component } from 'react';
import Header from './Header';
import '../styles/Signup.css';
import { NavLink } from 'react-router-dom';
class Signup extends React.Component {
	state={
		
	}

	signup = (e) =>{
		e.preventDefault();
		let { username,email,password,comfirmpassword } = this.state;
		if(username === '' || !username){
			alert('Try valid username')
		}else 
		if(!email|| email === '' ||email.length < 1){
			alert('input valid email')
		}	else if(!password || password === '' ||password.length < 1){
			alert('Use  strong password')
		}else if(comfirmpassword !== password){
			alert('passwords do not match')
		}else{
			window.location.href = '/Login';
			
		 }
	}

	handleChange=({target})=>{
		let {value, name} = target
		this.setState({[name]:value})
	}
	render() {
		let{username, password,comfirmpassword} = this.state
		return (
			<div className='container'>
				<div className="top">
				{/* <Header /> */}
				<div className='signup'>
					<h1>Signup Here</h1>
					<form action=""  onSubmit={this.signup} onChange={this.handleChange}>


						<input type="text" name="username" placeholder="Company Name" />

						<input type="text" name="email" placeholder="Company email" />

						<input type="password" name="password" placeholder="Company Password" />

						<input type="password" name="comfirmpassword" placeholder="Comfirm Password" />
						
						 <input type="submit" name="" value="Sign up" />
					<NavLink to='./Login' ><a href="#">Already Registered? Login here</a>	</NavLink>

					</form>
				</div>
				</div>
			</div>
		)
	}
}

export default Signup;
