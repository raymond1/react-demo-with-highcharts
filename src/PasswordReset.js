import React from 'react';
import { Redirect } from 'react-router-dom'

class PasswordReset extends React.Component{
	constructor(){
		super()
		this.state = {email: ''}
		this.handleChange = this.handleChange.bind(this)
		this.handleRequestResetPassword = this.handleRequestResetPassword.bind(this)
		this.message = ''
	}

	handleRequestResetPassword(event){
		if (this.state.email){
			this.message = (<div>An email containing information to reset your password has been sent to your account.</div>)
		}else{
			this.message = (<div>Please enter an email address.</div>)
		}
		let stateChange = {}
		this.setState(stateChange)
	}

	handleChange(event){
		let stateChange = {email: event.target.value}
		this.message = ''

		this.setState(stateChange)
	}

	render(){
		return (
	      		<form className="container">
			      	<div className="row">
			      		<div className="col">
				      		<input name='email' placeholder="Email" className="bottomOnly fullWidth" onChange={this.handleChange} value={this.state.email}/>
			      		</div>
			      	</div>
				    <div className="row">
				    	<div className="col">
				    		<br/>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col">
				    		<br/>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col">
				    		<button className="btn btn-block btn-primary float-right" type="button" onClick={this.handleRequestResetPassword}>Send Request</button>
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

export default PasswordReset