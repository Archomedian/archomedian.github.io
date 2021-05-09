export interface IProject{
    name: string;
	route: string;
    path: string;
}

export interface IProjectList{
	piRandomPoints: IProject;
}

const projects: IProjectList = {
	piRandomPoints:{
		name: "Approximating the value of Pi with random points",
		route: "/RandomPoints-Pi",
		path: "./Projects/RandomPoints-PI/App",
	}
}

	// name: "Approximating the value of Pi with random points",
	// URL_path: "/RandomPoints-Pi",
	// path: "./Projects/App"

export default projects;