import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
class Students extends React.Component {
	constructor() {
	  super();
	  this.state = { students: [] };
	}
  
	componentDidMount() {
	  fetch('http://127.0.0.1:8000/api/students')
		.then(response => response.json())
		.then(json => this.setState({ students: json.data }));
	}
  
	render() {
	  return (
		<div>
		  <h1>Students</h1>
		  {
			this.state.students.length == 0
			  ? 'Loading students...'
			  : this.state.students.map(user => (
				<figure key={user.id}>
				  <figcaption>
					{user.name}
				  </figcaption>
				</figure>
			  ))
		  }
		</div>
	  );
	}
  }
  
  ReactDOM.render(<Students />, document.getElementById('root'));