import React from 'react'
import './css/bootstrap.css'
import background from './images/background.png'
import './css/App.scss'
import {Route, Switch} from "react-router-dom"
import HomeScreen from './HomeScreen.js'
import Dashboard from './Dashboard.js'

function App() {
	return (
		<Switch>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path='/' component={HomeScreen}/>
		</Switch>
	)
}

export default App
