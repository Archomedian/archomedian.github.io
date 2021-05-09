import React from 'react';
import p5 from 'p5';

import {IsketchProps} from '../defs&configs/types'

export default class SketchWrapper extends React.Component<IsketchProps>{
	ref: any;
	canvas: p5 | null;
	
	constructor(props: IsketchProps){
		super(props);
		this.canvas = null;
		this.ref = React.createRef();
	}

	Sketch = (p: p5) => {
		let total: number = 0;
		let insideCircle: number = 0;
		let ratio: number = 0;
		let piApprox: number = 0; 
		let canvasSideSize: number = p.min(this.props.window.width, this.props.window.height*0.99);

		function drawBackground(){
			p.background(40, 44, 52);
			p.strokeWeight(4);
			p.noFill();
			p.stroke(255);
			p.translate(canvasSideSize*.5, canvasSideSize*.5);
			p.rectMode(p.CENTER);
			p.square(0, 0, canvasSideSize);
			p.circle(0, 0, canvasSideSize);
			p.strokeWeight(1);
			total = 0;
			insideCircle = 0;
			ratio = 0;
			piApprox = 0;
		}
		
		p.setup = () => {
			p.createCanvas(canvasSideSize, canvasSideSize);
			drawBackground();
		}

		function isOnScreen(x: number, y: number){
			return x > 0 && x < p.width && y > 0 && y < p.height;
		}

		function isInsideCircle(x: number, y: number, radius: number) : boolean{
			return x**2 + y**2 < radius**2;
		}

		p.draw = () => {
			p.translate(canvasSideSize*.5, canvasSideSize*.5);
			p.rectMode(p.CENTER);
			p.stroke(255);
			p.square(0, 0, canvasSideSize);
			p.circle(0, 0, canvasSideSize);
			if(this.props.controlPanel.clear){
				drawBackground();
				this.props.controlPanel.toggleClear();
			}
			p.frameRate(this.props.controlPanel.framerate);
			if(isOnScreen(p.mouseX, p.mouseY))
				for(let i:number = 0; i<this.props.controlPanel.numOfPointesPerFrame; i++){
					let randx: number = p.random(-canvasSideSize*.5, canvasSideSize*.5);
					let randy: number = p.random(-canvasSideSize*.5, canvasSideSize*.5);
					p.stroke(255*p.noise(total), 0, 0);
					if(isInsideCircle(randx, randy, canvasSideSize*.5)){
						p.stroke(0, 255*p.noise(total), 0);
						insideCircle++;
					}
					p.point(randx, randy);
					total++;
					ratio = insideCircle/total;
					piApprox = ratio*4;
				}
				
			this.props.callback({
				total: total,
				insideCircle: insideCircle,
				ratio: ratio,
				piApprox: piApprox
			});
		}

		p.windowResized = () => {
			canvasSideSize = p.min(p.windowWidth, p.windowHeight);
			p.resizeCanvas(canvasSideSize, canvasSideSize);
			p.translate(canvasSideSize*.5, canvasSideSize*.5)
			drawBackground();
		}
	}

	componentDidMount(){
		this.canvas = new p5(this.Sketch, this.ref.current);
	}

	componentWillUnmount(){
		this.canvas?.remove();
	}

	render(){
		return (
			<div ref={this.ref}>
			</div>
		);
	}
}