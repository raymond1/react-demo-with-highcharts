import React from 'react'
import {Link} from 'react-router-dom'

class SignUp extends React.Component{

	constructor(){
      super();
      this.state = {
      	password: '',
      	confirmPassword: '',
        justSubmitted: false,
        agreeConditions: false,
        message: false
      }

      this.errors = {}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
	}

	createUser(username,password){
		sessionStorage.setItem("username", username);
		sessionStorage.setItem("password", password);

		this.message = (<div>User {username} has been created. Click <Link to='/'>here</Link> to log in.</div>)
	}

	handleSubmit(e){
	    e.preventDefault()
    	if (!this.state.firstName){
    		this.errors['firstName'] = 'Please enter a first name.'
    	}

    	if (!this.state.lastName){
    		this.errors['lastName'] = 'Please enter a last name.'
    	}

    	if (!this.state.username){
    		this.errors['username'] = 'Please enter a user name.'
    	}

    	if (!this.state.email){
    		this.errors['email'] = 'Please enter an email.'
    	}

    	if (!this.state.password){
    		this.errors['password'] = 'Please enter a password.'
    	}

    	if (this.state.password !== this.state.confirmPassword){
    		this.errors['confirmPassword'] = 'Passwords do not match.'
    	}

    	if (!this.state.agreeConditions){
			this.errors['agreeConditions'] = 'You must agree to the conditions before you can sign up.'
		}

		if (Object.keys(this.errors).length > 0){
			//errors
		}else{
			//if there were no errors, then create the user and show the message that the user was created
			this.createUser(this.state.username,this.state.password)
		}

    	this.setState({justSubmitted:true})
	}


    handleChange(event) {
	    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
	    let stateChanges = {justSubmitted: false}
	    stateChanges[event.target.name] = value

	    this.errors = {}
	    this.message = ''
	    this.setState(stateChanges)
    }

	render(){
		//this.validate(this.state)
		return (
	      		<form className="container" >
			      	<div className="row">
			      		<div className="col-md-6 spacer">
				      		<input name="firstName" placeholder="First name" className="bottomOnly fullWidth" onChange={this.handleChange}/>
				      		<div className="error text-danger"> {this.state.justSubmitted?this.errors['firstName']:''}</div>
			      		</div>
			      		<div className="col-md-6 spacer">
				      		<input name="lastName" placeholder="Last name" className="bottomOnly fullWidth" onChange={this.handleChange}/>
				      		<div className="error text-danger">{this.state.justSubmitted?this.errors['lastName']:''}</div>
			      		</div>
			      	</div>
			      	<div className="row spacer">
			      		<div className="col-sm-12">
				      		<input name="username" placeholder="Username" className="bottomOnly fullWidth" onChange={this.handleChange}/>
				      		<div className="error text-danger">{this.state.justSubmitted?this.errors['username']:''}</div>
			      		</div>
				    </div>
			      	<div className="row spacer">
			      		<div className="col-sm-12">
				      		<input name="email" placeholder="Email" type="text" className="bottomOnly fullWidth" onChange={this.handleChange}/>
				      		<div className="error text-danger">{this.state.justSubmitted?this.errors['email']:''}</div>
			      		</div>
				    </div>
			      	<div className="row spacer">
			      		<div className="col-sm-12">
				      		<input name="password" value={this.state.password} placeholder="Password" type="password" className="bottomOnly fullWidth" onChange={this.handleChange}/>
				      		<div className="error text-danger">{this.state.justSubmitted?this.errors['password']:''}</div>				      		
			      		</div>
				    </div>
			      	<div className="row spacer">
			      		<div className="col-sm-12">
				      		<input name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm password" type="password"
				      		 className="bottomOnly fullWidth" onChange={this.handleChange}/>
							<div className="error text-danger">{this.state.justSubmitted?this.errors['confirmPassword']:''}</div>
			      		</div>
				    </div>


				    <div className="row spacer">
				    	<div className="col-sm-12">
				    		<div className="row">
				    			<div className="col">
				    				<label className="float-left text-muted"><input name="agreeConditions" type="checkbox" className="float-left form-checkbox" checked={this.state.agreeConditions} onChange={this.handleChange}/> I agree with terms and conditions.</label>
			    				</div>
			    			</div>
			    			<div className="row">
			    				<div className="col">
									<div className="error text-danger">{this.state.justSubmitted?this.errors['agreeConditions']:''}</div>
								</div>
							</div>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-sm">
				    		<a href="signup" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</a>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-sm">
				    		{
				    			this.message
				    		}
				    	</div>
				    </div>
	      		</form>
		)
	}
}

export default SignUp;