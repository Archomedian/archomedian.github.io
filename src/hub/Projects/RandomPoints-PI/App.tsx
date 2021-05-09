import React from 'react';
// import {createStore} from 'redux';

import '../../general/App.css';

import Slider from './controls/Slider';
import Sketch from './p5/SketchWrapper';

import initData from './defs&configs/initConfigs';
import {IappState, IsketchReturn} from './defs&configs/types';

export default class App extends React.Component<{}, IappState>{
	
	constructor(props: any){
		super(props);
		this.state = {
			controlPanel:{
				numOfPoints: initData.sliderData.data.initialValue,
				frames: initData.sliderFrames.data.initialValue,
				clear: false
			},
			sketchData:{
				total: 0,
				insideCircle: 0,
				ratio: 0,
				piApprox: 0
			}
		}
	}
	
	onSliderChange = (n: number) => {
		this.setState({
			controlPanel:{
				numOfPoints: n,
				frames: this.state.controlPanel.frames,
				clear: false
			}
		});
	}

	onFramesChange = (n: number) => {
		this.setState({
			controlPanel:{
				numOfPoints: this.state.controlPanel.numOfPoints,
				frames: n,
				clear: false
			}
		});
	}
	
	getSketchData = (n: IsketchReturn) => {
		this.setState({
			sketchData:{
				total: n.total,
				insideCircle: n.insideCircle,
				ratio: n.ratio,
				piApprox: n.piApprox
			}
		});
	}

	toggleClear = () => {
		this.setState({
			controlPanel:{
				numOfPoints: this.state.controlPanel.numOfPoints,
				frames: this.state.controlPanel.frames,
				clear: this.state.controlPanel.clear ? false : true
			}
		});
	}


	render(){
		initData.sketchWindowConfig = {
			width: (window.innerWidth*.5),
			height: window.innerHeight
		}
		return(
			<div className='main-container'>
				<div className='App-header' style={{width:'50%'}}>
					<Sketch {...
						{
							controlPanel:{
								numOfPointesPerFrame: this.state.controlPanel.numOfPoints,
								framerate: this.state.controlPanel.frames,
								clear: this.state.controlPanel.clear,
								toggleClear: this.toggleClear
							},
							window: initData.sketchWindowConfig,
							callback: this.getSketchData
						}
					} />
					{/* <strong>{this.state.numOfPoints}</strong>
					<br/>
					<h1>{"help"}</h1> */}
					
				</div>
				<div className='App-header' style={{width:'50%'}}>
					<strong>STATISTICS</strong>
					<br/>
					<span>{"Points inside circle: " + this.state.sketchData.insideCircle}</span>
					<span>{"Total points: " + this.state.sketchData.total}</span>
					<span>{"Ratio: " + this.state.sketchData.ratio}</span>
					<span>{"Pi Approximation: "} <br/> {
					"Ratio x 4 = " + this.state.sketchData.piApprox}</span>
					<span>The more points you accumulate, the better the approximation</span>
					<span>But keep in mind the chaotic nature of random numbers</span>
					<br/>
					<br/>
					<strong>CONTROL PANEL</strong>
					<br/>
					<Slider {...
						{
							data:initData.sliderData.data,
							style:initData.sliderData.style,
							callback:this.onSliderChange
						}
					}/>
					<Slider {...
						{
							data:initData.sliderFrames.data,
							style:initData.sliderFrames.style,
							callback:this.onFramesChange
						}
					}/>
					<br/>
					<button className='button button1' onClick={this.toggleClear}>Reset</button>
					<span>Position mouse over the canvas on the left to run</span>
					<span>Move mouse out of the canvas to pause</span>
				</div>
			</div>

		);
	}
}