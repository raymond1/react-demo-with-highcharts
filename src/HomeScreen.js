import React from 'react'
import {Route, Switch} from "react-router-dom"
import Login from './Login.js'
import SignUp from './SignUp.js'
import PasswordReset from './PasswordReset.js'
import './css/HomeScreen.scss'
class HomeScreen extends React.Component
{
	constructor(){
		super()
	}

	render(){
		return	(
			<div className="container-fluid main_container background">
				<div className="row align-items-end h-100">
					<div className="col d-none d-md-block ">Left</div>
					<div className="col text-center h-100">
						<div class="paper">
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
										<Route exact path = '/signup' component={signupMessage}/>
										<Route exact path = '/password_reset' component={passwordReset}/>
										<Route path = '/' component={loginMessage} />
									</Switch>
								</div>
								<div className="col-1"></div>
							</div>
							<div className="row">
								<div className="col-1"></div>

								<div className="col-sm-10">
									<Switch>
										<Route exact path='/signup' component={SignUp}/>
										<Route exact path='/password_reset' component={PasswordReset}/>
										<Route path='/' component={Login}/>
									</Switch>
								</div>
								<div className="col-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}
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

function passwordReset(){
	return (
		<p>Welcome back! Please log in to your account.</p>
	)
}

export default HomeScreen