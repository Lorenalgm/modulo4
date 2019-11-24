import React, { Component } from 'react';

class TechList extends Component {
	state = {
		techs: [
			'Node.js',
			'Reactjs',
			'React Native'		
		]
	};

	render() {
		console.log(this.state);

		return (
			<ul>
				<li>Node.js</li>
				<li>Reactjs</li>
				<li>React Native</li>
			</ul>
		);
	}
}

export default TechList;