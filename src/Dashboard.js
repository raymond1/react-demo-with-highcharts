import React from 'react';
import {Redirect} from 'react-router-dom'
class Dashboard extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	renderRedirect(){
		if (!sessionStorage.getItem('loggedIn'))
			return (<Redirect to='/'/>)
	}

	render(){
		return (
			<div>
				{this.renderRedirect()}
				adsfasdf dashboard {sessionStorage.getItem('loggedIn')?'logged in':'not logged in' }
			</div>
		)
	}
}

export default Dashboard;