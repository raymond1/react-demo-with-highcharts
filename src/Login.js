import React from 'react';
import { Redirect } from 'react-router-dom'

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
		this.setState({loginClicked: true})
	}

	render(){
		return (
	      		<form className="container">
					{this.renderRedirect()}

			      	<div className="row">
		      			<div className="col-1">
		      			</div>

			      		<div className="col-sm-10">
				      		<input name='username' placeholder="Username" className="bottomOnly fullWidth" onChange={this.handleChange} value={this.state.username}/>
			      		</div>
		      			<div className="col-1">
		      			</div>
			      	</div>
			      	<div className="row spacer">
		      			<div className="col-1">
		      			</div>

			      		<div className="col-sm-10">
				      		<input name='password' placeholder="Password" type="password" className="bottomOnly fullWidth" onChange={this.handleChange} value={this.state.password}/>
			      		</div>
		      			<div className="col-1">
		      			</div>
				    </div>
				    <div className="row spacer">
		      			<div className="col-1">
		      			</div>

				    	<div className="col-sm-5">
				    		<label className="float-left text-muted"><input type="checkbox" className="float-left form-checkbox" onChange={this.handleChange}/> Remember me</label>
				    	</div>
				    	<div className="col-sm-5">
				    		<span className="text-muted"><a href="forgot_password.html" className="float-right text-reset">Forgot Password</a></span>
				    	</div>
		      			<div className="col-1">
		      			</div>

				    </div>
				    <div className="row">
		      			<div className="col-1">
		      			</div>
				    	<div className="col-sm">
				    		<button type="button" className="btn btn-block btn-primary float-left" onClick={this.handleLogin}>Login</button>
				    	</div>
				    	<div className="col-sm">
				    		<a href="signup" className="btn btn-block btn-primary float-right">Sign Up</a>
				    	</div>
		      			<div className="col-1">
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