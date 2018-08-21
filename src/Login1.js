import React, { Component } from 'react';
import Header from './Header';
import '../styles/Login.css';
import { NavLink } from 'react-router-dom';
class Login extends React.Component {
	render() {
		return (
			<div  className='container'>
			<div className="top">
			 <Header />
			 <div className='loginbox'>
					<h1>Login Here</h1>
					<form action="">
						{/* <p>Username</p> */}
						<input type="text" name="" placeholder="Enter Username" />
						{/* <p>Password</p> */}
						<input type="password" name="" placeholder="Enter password" />
						{/* <input type="submit" name="" value="Login" /> */}
						<NavLink to='./Signup' > <input type="submit" name="" value="Login" /> </NavLink>
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
