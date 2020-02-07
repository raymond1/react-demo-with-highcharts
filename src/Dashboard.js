import React from 'react'
import {Redirect} from 'react-router-dom'
import './css/Dashboard.scss'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import SideBar from './SideBar.js'
import LoggedInTemplate from './LoggedInTemplate.js'


class Dashboard extends React.Component{
	constructor(){
		super()
		this.state = {data:null}
		this.totalBuysOptions = this.totalBuysOptions.bind(this)
		this.totalSellsOptions = this.totalSellsOptions.bind(this)
		this.totalFlowOptions = this.totalFlowOptions.bind(this)
	}

	componentDidMount(){
		fetch('https://www.mercadobitcoin.net/api/BTC/trades')
		.then(response => response.json())
		.then
		(
			data => 
			{
				this.setState({data})
			}
		)
	}

	totalBuysOptions(){
		if (this.state.data){
			let seriesData = []
			for (let datapoint of this.state.data){
				if (datapoint.type === 'buy'){
					seriesData.push(datapoint.price*datapoint.amount)
				}
			}

			if (seriesData.length === 0){
				seriesData = [0]
			}
			return {
				responsive:
					{
						rules: [
						{
							condition: {
                				maxWidth: 500
            				}
    					}]
					},
				series: [{name: 'Buys', data: seriesData}]
			}
		}else{
			return {series: [{name: 'Buys', data: [0]}]}
		}
	}

	totalSellsOptions(){
		if (this.state.data){
			let seriesData = []
			for (let datapoint of this.state.data){
				if (datapoint.type === 'sell'){
					seriesData.push(datapoint.price*datapoint.amount)
				}
			}

			if (seriesData.length === 0){
				seriesData = [0]
			}
			return {
				responsive:
					{
						rules: [
						{
							condition: {
                				maxWidth: 500
            				}
    					}]
					},
				series: [{name: 'Sells', data: seriesData}]
			}
		}else{
			return {series: [{name: 'Sells', data: [0]}]}
		}
	}

	totalFlowOptions(){
		if (this.state.data){
			let buyTotal = 0
			let sellTotal = 0
			for (let datapoint of this.state.data){
				if (datapoint.type === 'buy'){
					buyTotal += datapoint.price*datapoint.amount
				}else if (datapoint.type === 'sell'){
					sellTotal += datapoint.price*datapoint.amount
				}
			}

			return {
				chart:{
					type: 'column'
				},
				responsive:
					{
						rules: [
						{
							condition: {
                				maxWidth: 500
            				}
    					}]
					},
				series: [{name: 'Sells', data: [sellTotal]}, {name: 'Buys', data: [buyTotal]}]
			}
		}else{
			return {series: [{name: 'Sells', data: [0]}, {name: 'Buys', data: [0]}]}
		}
	}

	totalProportionOptions(){
		if (this.state.data){
			let buyTotal = 0
			let sellTotal = 0
			for (let datapoint of this.state.data){
				if (datapoint.type === 'buy'){
					buyTotal += datapoint.price*datapoint.amount
				}else if (datapoint.type === 'sell'){
					sellTotal += datapoint.price*datapoint.amount
				}
			}

			return {
				chart:{
					type: 'pie'
				},
				xAxis:{
					categories: ['buys', 'sells']
				},
				responsive:
				{
					rules: [
					{
						condition: {
            				maxWidth: 500
        				}
					}]
				},
				series: [{data: [buyTotal, sellTotal]}]
			}
		}else{
			return {series: [{data: [1]}]}
		}
	}

	renderRedirect(){
		if (!sessionStorage.getItem('loggedIn'))
			return (<Redirect to='/'/>)
	}

	render(){
		let contents = (
				<div>
					<div className="row">
						<div className="col-md-4">
							<HighchartsReact
							    highcharts={Highcharts}
							    options={this.totalBuysOptions()}
							  />
					  	</div>
					  	<div className="col-md-4">
							<HighchartsReact
							    highcharts={Highcharts}
							    options={this.totalSellsOptions()}
							  />
					  	</div>
					  	<div className="col-md-4">
							<HighchartsReact
							    highcharts={Highcharts}
							    options={this.totalFlowOptions()}
							  />

							<button type="button" onClick={this.test}>Test</button>
					  	</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<HighchartsReact
							    highcharts={Highcharts}
							    options={this.totalProportionOptions()}
							  />
					  	</div>
					</div>
				</div>
			)
		return (
			<LoggedInTemplate contents={contents}/>
		)
	}

}

export default Dashboard