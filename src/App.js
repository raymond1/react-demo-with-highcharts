import React from 'react';
import './css/bootstrap.css';
import background from './images/background.png';
import './css/App.css';

function App() {
  return (
    <div className="container-fluid main_container">
      <div className="row align-items-end full_height">
      	<div className="col-sm background full_height">
      	</div>
      	<div className="col-sm full_height text-center">
      		<form className="container">
	      		<div className="row">
	      			<div className="col-1">
	      			</div>

	      			<div className="col-sm-10">
			      		<h1>AWESOME DASH</h1>
	      			</div>

	      			<div className="col-1">
	      			</div>

	      		</div>
	      		<div className="row">
	      			<div className="col-1">
	      			</div>
	      			<div className="col-sm-10">
			      		<p className="loginWidget_message">Welcome back! Please log in to your account.</p>
		      		</div>
	      			<div className="col-1">
	      			</div>
		      	</div>
		      	<div className="row">
	      			<div className="col-1">
	      			</div>

		      		<div className="col-sm-10">
			      		<input placeholder="Username" className="bottomOnly fullWidth"/>
		      		</div>
	      			<div className="col-1">
	      			</div>
		      	</div>
		      	<div className="row spacer">
	      			<div className="col-1">
	      			</div>

		      		<div className="col-sm-10">
			      		<input placeholder="Password" type="password" className="bottomOnly fullWidth"/>
		      		</div>
	      			<div className="col-1">
	      			</div>
			    </div>
			    <div className="row spacer">
	      			<div className="col-1">
	      			</div>

			    	<div className="col-sm-5">
			    		<label className="float-left text-muted"><input type="checkbox" className="float-left form-checkbox"/> Remember me</label>
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
			    		<button type="button" className="btn btn-block btn-primary float-left">Login</button>
			    	</div>
			    	<div className="col-sm">
			    		<a href="forgot_password.html" className="btn btn-block btn-primary float-right">Sign Up</a>
			    	</div>
	      			<div className="col-1">
	      			</div>
			    </div>
      		</form>
      	</div>
      </div>
    </div>
  );
}

export default App;
