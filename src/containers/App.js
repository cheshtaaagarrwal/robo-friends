import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

      componentDidMount(){
      	fetch('https://jsonplaceholder.typicode.com/users')
      	.then(response=>response.json())
      	.then(users=>this.setState({robots:users}));
      }
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		
	}
	render(){
		const filterRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length===0){
			return <h1>loading</h1>
		}
		else {
		
return (
		<div className='tc'>
		<h1 className='f1'>Robofriends</h1>
		<Searchbox searchChange={this.onSearchChange}/>
		<Scroll>
		<Cardlist robots={filterRobots}/>
		</Scroll>
		</div>
	 	);
	} 
  }

}
	
export default App;