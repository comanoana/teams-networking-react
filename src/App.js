import { Component } from 'react';
import './App.css';
import {PersonsTable} from "./PersonsTable";




class App extends Component {
  constructor(persons) {
    super(persons);
    this.state = {
       persons : [],
       date: new Date().toString()
    }
  }
     componentDidMount() {
      setInterval(() => {
        this.setState({
          date: new Date().toString
        })
        
      }, 60000);

      
      this.load();
    }
      
      load() {
        fetch("http://localhost:3000/teams-json")
          .then(res => res.json()) 
          .then (persons => {
            this.setState({
            persons 
           });
        });
      }
       

   render() {
     console.debug(this.state.persons);
     return(
    <div>
    <h1>Teams Networking</h1>
    <div>Search</div>
    <PersonsTable persons={this.state.persons}  border={1} />
    <div>{this.state.date}</div>
    </div>
   );
  }
  }
  

export default App;
 