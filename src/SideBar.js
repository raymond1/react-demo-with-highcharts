import React from 'react'
import Octicon from 'react-octicon'
import './css/SideBar.scss'
import {Link} from 'react-router-dom'

//props:path
function ListItem(props){
	let classes="list-group-item "
	if (window.location.pathname === props.linkPath){
		classes += "selected"
	}
	return (
		<li className={classes}><Octicon mega name={props.iconName}/> <Link className="text-reset" to={props.linkPath}>{props.linkName}</Link></li>
		)

}

class SideBar extends React.Component{
	constructor(props){
		super()
	}
/*
					  <li className="list-group-item "><Octicon mega name="home"/> <Link className="text-reset" to='/'>Home</Link></li>
					  <li className="list-group-item "><Octicon mega name="graph"/> <Link className="text-reset" to='/dashboard'>Dashboard</Link></li>
					  <li className="list-group-item "><Octicon mega name="person"/> <Link className="text-reset" to='/aboutme'>About Me</Link></li>
					  <li className="list-group-item "><Octicon mega name="book"/> Products</li>
					  <li className="list-group-item "><Octicon mega name="file"/> Invoices</li>
					  <li className="list-group-item "><Octicon mega name="mail"/> Mail Marketing</li>
					  <li className="list-group-item "><Octicon mega name="comment-discussion"/> Chat Room</li>
					  <li className="list-group-item "><Octicon mega name="calendar"/> Calendar</li>
					  <li className="list-group-item "><Octicon mega name="question"/> Help Centre</li>
					  <li className="list-group-item "><Octicon mega name="gear"/> Settings</li>

*/
	render(){
		return (
					<ul className="list-group menu">
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
				)
	}
}

export default SideBar