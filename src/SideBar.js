import React from 'react'
import Octicon from 'react-octicon'
import './css/SideBar.scss'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

function ListItem(props){
	let classes="list-group-item "
	if (window.location.pathname === props.linkPath){
		classes += "selected"
	}
	return (
		<li className={classes}><Octicon mega name={props.iconName}/> <span className="navbar-list-item-collapse collapse show"><Link className="text-reset" to={props.linkPath}>{props.linkName}</Link></span></li>
		)

}

class SideBar extends React.Component{
	constructor(props){
		super()
	}

	render(){
		return (
			<nav className="container-fluid navbar h-100 menu">
					<ul className="list-group" id="nav-menu-dropdown">
						<li className="list-group-item">
							<div className="navbar-header">
								<h4 className="navbar-list-item-collapse collapse show pull-left">AWESOME DASH</h4>
								<div className="pull-right">
									<a className="btn btn-primary pull-right" type="button" data-toggle="collapse" data-target=".navbar-list-item-collapse" aria-expanded="false" aria-controls="menu" href="nav-menu-dropdown">
										<i className="fa fa-bars"></i>
									</a>
								</div>
							</div>
						</li>
						<ListItem iconName="home" linkPath="/" linkName="Home"/>
						<ListItem iconName="graph" linkPath="/dashboard" linkName="Dashboard"/>
						<ListItem iconName="person" linkPath="/aboutme" linkName="About Me"/>
						<ListItem iconName="book" linkPath="/" linkName="Products"/>
						<ListItem iconName="file" linkPath="/" linkName="Invoices"/>
						<ListItem iconName="mail" linkPath="/" linkName="Mail Marketing"/>
						<ListItem iconName="comment-discussion" linkPath="/" linkName="Chat Room"/>
						<ListItem iconName="calendar" linkPath="/" linkName="Calendar"/>
						<ListItem iconName="question" linkPath="/" linkName="Help Centre"/>
						<ListItem iconName="gear" linkPath="/" linkName="Settings"/>
					</ul>
			</nav>
				)
	}
}

export default SideBar