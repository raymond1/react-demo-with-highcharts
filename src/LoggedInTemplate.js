import React from 'react'
import {Redirect} from 'react-router-dom'
import './css/Dashboard.scss'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import SideBar from './SideBar.js'


class LoggedInTemplate extends React.Component{
	constructor(props){
		super()
		this.props = props
	}


	renderRedirect(){
		if (!sessionStorage.getItem('loggedIn'))
			return (<Redirect to='/'/>)
	}

	render(){
		return (
			<div className="dashboardContainer row">
				{this.renderRedirect()}
				<div className="col-md-2">
					<SideBar highlighted='Dashboard'/>
				</div>
				<div className="col-md-10">
					{this.props.contents}
				</div>
			</div>
		)
	}
}

export default LoggedInTemplate