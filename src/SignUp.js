import React from 'react';

class SignUp extends React.Component{

	constructor(){
      super();
      this.state = {
        fields: {},
        errors: {},
        justSubmitted: false
      }

      this.errors = {}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
	}

	handleSubmit(e){
	    e.preventDefault()

	}
/*
	updateState(fields, errors){
		var innerUpdateState = function(state,props){
			state.fields = fields
			state.errors = errors
			return state
		}
		return innerUpdateState
	}*/
	handleChangePassword(event){
		//let fields = {}
		//fields['password'] = event.target.value
		debugger
		this.setState({fields:{password: event.target.value}})
	}
	handleChangeConfirmPassword(event){
		let fields = {}
		fields['confirmPassword'] = event.target.value
		this.setState({fields})
	}

    handleChange(event) {
	    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
	    let fields={}
	    fields[event.target.name] = value

	    let errors = {} //clear errors
	    this.setState({fields, errors})
    }

    componentDidUpdate(){
    	//this.validate(this.state)
    }

    validate(state){
    	console.log(state.fields.password)
    	console.log(state.fields.confirmPassword)
    	if ((state.fields.password != state.fields.confirmPassword)/*&& state.justSubmitted*/){
    		this.errors['confirmPassword'] = 'Passwords do not match'
    	}else{
    		this.errors['confirmPassword'] = 'Passwords match'
    	}
    }

	render(){
		//this.validate(this.state)
		return (
	      		<form className="container" >

			      	<div className="row">
			      		<div className="col-sm-5">
				      		<input name="firstName" placeholder="First name" className="bottomOnly fullWidth" onChange={this.handleChange}/>
			      		</div>
			      		<div className="col-sm-5">
				      		<input name="lastName" placeholder="Last name" className="bottomOnly fullWidth" onChange={this.handleChange}/>
			      		</div>
			      	</div>
			      	<div className="row spacer">
			      		<div className="col-sm-10">
				      		<input name="username" placeholder="Username" className="bottomOnly fullWidth" onChange={this.handleChange}/>
			      		</div>
				    </div>
			      	<div className="row spacer">
			      		<div className="col-sm-10">
				      		<input name="email" placeholder="Email" type="email" className="bottomOnly fullWidth" onChange={this.handleChange}/>
			      		</div>
				    </div>
			      	<div className="row spacer">
			      		<div className="col-sm-10">
				      		<input name="password" value={this.state.fields.password} placeholder="Password" type="text" className="bottomOnly fullWidth" onChange={this.handleChangePassword}/>
			      		</div>
				    </div>
			      	<div className="row spacer">
			      		<div className="col-sm-10">
				      		<input name="confirmPassword" value={this.state.fields['confirmPassword']} placeholder="Confirm password" type="text"
				      		 className="bottomOnly fullWidth" onChange={this.handleChange}/>
							<div>{this.errors['confirmPassword']}</div>
			      		</div>
				    </div>


				    <div className="row spacer">
				    	<div className="col-sm">
				    		<label className="float-left text-muted"><input name="agreeConditions" type="checkbox" className="float-left form-checkbox" checked={this.state.fields["agreeConditions"]} onChange={this.handleChange}/> I agree with terms and conditions.</label>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-sm">
				    		<a href="signup" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</a>
				    	</div>
				    </div>
	      		</form>

		)
	}
}

export default SignUp;