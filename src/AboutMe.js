import React from 'react'
import LoggedInTemplate from './LoggedInTemplate.js'


class AboutMe extends React.Component{
	constructor(){
		super()
	}

	render(){
		let contents = (
				<div className="row">
					<div className="col-1"></div>

					<div className="col-10">
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
								Hello. I have completed the front end test, and I am hoping you will choose to hire me. I am a hard-working individual with very strong problem solving skills and will be able to complete the complex and detail-oriented work that I am sure your team needs to get done. I have been working in the software industry for over 11 years and I have some theoretical background in software engineering from my education as an electrical engineer and from my years of working in industry. The thing that makes me great is that I can find creative solutions to technical problems that others are not able to solve because they lose interest in problems that take more time to tackle.
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
					</div>
					<div className="col-1"></div>
				</div>
			)
		return (
			<LoggedInTemplate contents={contents}/>
		)
	}

}

export default AboutMe