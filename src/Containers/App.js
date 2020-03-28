import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
//import {robots} from './Robots';
import SearchBox from '../Components/SearchBox';
import './App.css';

//https://www.youtube.com/watch?v=TaN5At5RWH8
class App extends Component {
	
	constructor(){
		super()
		this.state= {
			robots: [],
			searchfield:'' 
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));

	}



	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})	

	}


	render(){
		const {robots,searchfield}=this.state;
		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
			<h1>Loading</h1> :
			(
			<div className ='tc'>
				<h1 className='f1'> RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<div style={{overflow: 'scroll',height:'200px'}}>
				<Cardlist robots ={filteredRobots}/>
				</div>
			</div>

			);
		
	}
}

export default App;