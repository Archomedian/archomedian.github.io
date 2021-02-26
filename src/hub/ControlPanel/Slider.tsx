import React from 'react'

interface sliderProps{
	data:{
		initialValue: number;
		bounds: {
			MIN: number;
			MAX: number;
			STEP: number;
		}
	}
	style: {
		div: {
			divClass: string;
			divWidth: number;
		}
		slider: {
			sliderWidth: number;
			sliderMaxWidth: number;
		}
	}
    callback: (n: number) => void
}

interface sliderState{
	value: number;
}

export default class Slider extends React.Component<sliderProps, sliderState>{
	constructor(props: sliderProps){
		//gets objects from parent such as "this.setState()"
		super(props);
		this.state = {
			value: this.props.data.initialValue
		};
	}

	onSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
            value: Number(event.target.value)
        });
        this.props.callback(+event.target.value);
	}

	render(){
		return(
			<div className={this.props.style.div.divClass} style={{width: '50%'}}>
				<strong>{this.state.value}</strong>
				<input
					type="range"
					min={this.props.data.bounds.MIN}
					max={this.props.data.bounds.MAX}
					step={this.props.data.bounds.STEP}
					value={this.state.value}
					style={{width: '80%', maxWidth: '1000px'}}
					onChange={this.onSliderChange}
				/>
			</div>
		);
	}

}