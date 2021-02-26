import React from 'react'
import Slider from './Slider'

interface cpProps{
	style:{
		divName: string	
	}
	callback: (n: number) => void
}

interface cpState{
	numOfPoints: number;
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

export default class ControlPanel extends React.Component<cpProps, cpState>{
	
	render(){
		return(
			<div className={this.props.style.divName}>
				<strong>CONTROL PANEL</strong>
				<Slider {...
					{
						data:sliderData.data,
						style:sliderData.style,
						callback:this.props.callback
					}
				}/>
			</div>
		)
	}
}