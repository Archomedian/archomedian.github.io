import React from 'react'

import {IsliderProps, IsliderState} from '../defs&configs/types';

export default class Slider extends React.Component<IsliderProps, IsliderState>{
	constructor(props: IsliderProps){
		super(props);
		this.state = {
			value: this.props.data.initialValue
		};
	}

	onSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sliderValue = +event.target.value;
		this.setState({
            value: sliderValue
        });
        this.props.callback(sliderValue);
	}

	render(){
		return(
			<div className={this.props.style.div.divClass} style={{width: this.props.style.div.divWidth}}>
				{this.props.data.text + this.state.value}
				<br/>
				<input
					type="range"
					min={this.props.data.bounds.MIN}
					max={this.props.data.bounds.MAX}
					step={this.props.data.bounds.STEP}
					value={this.state.value}
					style={{width: this.props.style.slider.sliderWidth, maxWidth: this.props.style.slider.sliderMaxWidth}}
					onChange={this.onSliderChange}
				/>
			</div>
		);
	}

}