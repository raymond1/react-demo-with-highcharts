import React from 'react';
import './css/bootstrap.css';
import background from './images/background.png';
import './css/App.scss';
import {Route, Switch} from "react-router-dom";
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import SignUp from './SignUp.js';

window.users = []
function App() {
	return (
		<div className="container-fluid main_container">
			<div className="row align-items-end full_height">
				<div className="col-sm background full_height"></div>
				<div className="col-sm full_height text-center">
					<div className="row">
						<div className="col-1"></div>

						<div className="col-sm-10">
							<h1>AWESOME DASH</h1>
						</div>

						<div className="col-1"></div>
					</div>
					<div className="row">
						<div className="col-1"></div>
						<div className="col-sm-10">
							<Switch>
								<Route exact path = '/' component={loginMessage} />
								<Route exact path = '/signup' component={signupMessage}/>
							</Switch>
						</div>
						<div className="col-1"></div>
					</div>
					<div className="row">
						<div className="col-1"></div>

						<div className="col-sm-10">
							<Switch>
								<Route exact path='/' component={Login}/>
								<Route exact path='/signup' component={SignUp}/>
							</Switch>
						</div>
						<div className="col-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

function signupMessage(){
	return (
		<p>Please complete to create your account.</p>
	)
}

function loginMessage(){
	return (
		<p>Welcome back! Please log in to your account.</p>
	)
}
export default App;
