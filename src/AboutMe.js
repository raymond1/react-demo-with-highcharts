import React from 'react'
import LoggedInTemplate from './LoggedInTemplate.js'


class AboutMe extends React.Component{
	constructor(){
		super()
	}

	render(){
		let contents = (
				<>
					<div className="row">
						<div className="col ">
							<h2 className="text-right">Name</h2>
						</div>
						<div className="col">
							Raymond Leon
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h2 className="text-right">Email</h2>
						</div>
						<div className="col">
							raymondleon@raymondleon.ca
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h2 className="text-right">Phone</h2>
						</div>
						<div className="col">
							519.635.5270
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h2 className="text-right">Note</h2>
						</div>
						<div className="col">
							I prefer being called from 9:00am to 5:00pm.
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h2 className="text-right">Resume</h2>
						</div>
						<div className="col">
							See fixtures
						</div>
					</div>
				</>
			)
		return (
			<LoggedInTemplate contents={contents}/>
		)
	}

}

export default AboutMe