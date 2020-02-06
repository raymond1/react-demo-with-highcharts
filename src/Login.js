import React from 'react';
import { Redirect, Link } from 'react-router-dom'

class Login extends React.Component{
	constructor(){
		super()
		this.state = {username: '', password: '', rememberMe: false, loginClicked: false, redirect: false}
		this.handleChange = this.handleChange.bind(this)
      	this.handleLogin = this.handleLogin.bind(this)
      	this.message = ''
	}

	handleChange(event){
		let value
		if (event.target.type !== 'checkbox'){
			value = event.target.value
		}else{
			value = event.target.checked
		}
		let stateChange = {loginClicked: false}
		stateChange[event.target.name] = value
		this.message = ''

		this.setState(stateChange)
	}

	renderRedirect(){
		if (this.state.redirect)
			return (<Redirect to='/dashboard'/>)
	}

	handleLogin(event){
		if (this.state.username === sessionStorage.getItem('username') && this.state.password === sessionStorage.getItem('password')){
			//redirect to the dashboard
			this.setState({redirect: true})
		}else{
			this.message = (<div>Unable to log in with your username and password combination.</div>)
		}
		sessionStorage.setItem('loggedIn', true)
		this.setState({loginClicked: true})
	}

	render(){
		return (
	      		<form className="container">
					{this.renderRedirect()}

			      	<div className="row">
			      		<div className="col">
				      		<input name='username' placeholder="Username" className="bottomOnly fullWidth" onChange={this.handleChange} value={this.state.username}/>
			      		</div>
			      	</div>
			      	<div className="row spacer">
			      		<div className="col">
				      		<input name='password' placeholder="Password" type="password" className="bottomOnly fullWidth" onChange={this.handleChange} value={this.state.password}/>
			      		</div>
				    </div>
				    <div className="row spacer">
				    	<div className="col">
				    		<label className="float-left text-muted"><input type="checkbox" className="float-left form-checkbox" onChange={this.handleChange}/> Remember me</label>
				    	</div>
				    	<div className="col">
				    		<span className="text-muted"><Link to="password_reset" className="float-right text-reset">Forgot Password</Link></span>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col">
				    		<button type="button" className="btn btn-block btn-primary float-left" onClick={this.handleLogin}>Login</button>
				    	</div>
				    	<div className="col">
				    		<a href="signup" className="btn btn-block btn-primary float-right">Sign Up</a>
				    	</div>
				    </div>
				    <div className="row">
		      			<div className="col">
		      				{this.message}
		      			</div>
	      			</div>
	      		</form>
	    )
    }
}

export default Login