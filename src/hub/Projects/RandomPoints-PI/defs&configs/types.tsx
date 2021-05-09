// APP

export interface IappState{
	controlPanel:{
		numOfPoints: number;
		frames: number;
		clear: boolean;
	}
	sketchData:{
		total: number;
		insideCircle: number;
		ratio: number;
		piApprox: number;
	}
}


// SKETCH

export interface IsketchReturn{
	total: number;
	insideCircle: number;
	ratio: number;
	piApprox: number;
}

export interface IsketchProps{
	controlPanel:{
		numOfPointesPerFrame: number;
		framerate: number;
		clear: boolean;
		toggleClear: () => void;
	},
	window:{
		width: number;
		height: number;
	}
	callback: (n: IsketchReturn) => void
}

export interface IsketchState{
	value: number;
}


// SLIDER

export interface IsliderProps{
	data:{
		initialValue: number;
		text: string;
		bounds: {
			MIN: number;
			MAX: number;
			STEP: number;
		}
	}
	style: {
		div: {
			divClass: string;
			divWidth: string;
		}
		slider: {
			sliderWidth: string;
			sliderMaxWidth: string;
		}
	}
	callback: (n: number) => void
}

export interface IsliderState{
	value: number;
}
