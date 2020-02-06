import React from 'react';

class Dashboard extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	render(){
		return (
			<div>adsfasdf dashboard {sessionStorage.getItem('loggedIn')?'logged in':'not logged in' }</div>
		)
	}
}

export default Dashboard;