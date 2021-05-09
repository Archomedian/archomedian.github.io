import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import './general/App.css';

import projects from './projectList';

import piRandomPointsApp from "./Projects/RandomPoints-PI/App";

const HUB_PATH = '/'

function Hub(){
	return (
		<div className='App-header'>
			<h1>Hi!</h1>
			<p><strong>Placeholder project:</strong></p>
			<Link to={projects.piRandomPoints.route}><strong className='button button1'>Click Me! :)</strong></Link>
		</div>
	);
}

export default function RouterApp(){

	return(
		<Router>
			<Route path={HUB_PATH} exact component={Hub}/>
			<Route path={projects.piRandomPoints.route} component={piRandomPointsApp}/>
		</Router>
	);
}