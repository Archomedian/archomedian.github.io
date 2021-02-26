import React from 'react';
import ControlPanel from './ControlPanel/ControlPanel'
import Slider from './ControlPanel/Slider'
import './App.css'

interface appState{
	numOfPoints: number
}

const sliderData = {
	data:{
		initialValue: 50,
		bounds: {
			MIN: 5,
			MAX: 500,
			STEP: 1
		}
	},
	style:{
		div: {
			divClass: "main-container",
			divWidth: 50
		},
		slider: {
			sliderWidth: 90,
			sliderMaxWidth: 900
		}
	},
	funcs:{
	}
}

export default class App extends React.Component<{}, appState>{
	
	constructor(props: any){
		super(props);
		this.state = {
			numOfPoints: sliderData.data.initialValue
		}
	}
	
	onSliderChange = (n: number) => {
		this.setState({
			numOfPoints: n
		})
		console.log(n)
	}
	
	render(){
		return(
			<div className='main-container'>
				<div style={{width:'50%'}}>
					<strong>{this.state.numOfPoints}</strong>
					<br/>
				</div>
				<div className='App-header' style={{width:'50%'}}>
					<strong>CONTROL PANEL</strong>
					<br/>
					<Slider {...
						{
							data:sliderData.data,
							style:sliderData.style,
							callback:this.onSliderChange
						}
					}/>
				</div>
			</div>

		);
	}
}