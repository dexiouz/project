import React, { Component } from 'react';
import Header from './Header';
import '../styles/Login.css';
import { NavLink } from 'react-router-dom';
class Login extends React.Component {
	state={

	}
	login =(e)=>{
		e.preventDefault();
		let {username, password} = this.state;
		let regUsername = /[a-z,0-9]/g
			if(username === '' || !username || username.length < 1){
				alert('enter valid username')
			}else if(password === '' || !password){
				 alert('enter valid password')
			}else{
				window.location.href = '/App';
				 alert('Welcome')
			}
	
	}


	handleChange=({target})=>{
		let {value,name} = target
		this.setState({[name]:value})
	}
	render() {
		return (
			<div className='container'>
				<div className="top">
					<Header />
					<div className='loginbox'>
						<h1>Login Here</h1>
						<form action="" onChange={this.handleChange}>

							<input type="text" name="username" placeholder="Username" />


							<input type="password" name="password" placeholder="password" />

							<input type="submit" name="" value="Login" onClick={this.login} />

							{/* <NavLink to='./Signup' > <input type="submit" name="" value="Login" /> </NavLink> */}
							<a href="#">Lost your password?</a><br />
							<a href="#">Don't have an accout?</a>
						</form>
					</div>

			</div>
			 </div>

		)
	}
}

export default Login;
