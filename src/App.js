import { Component } from 'react';
import './App.css';
import {PersonsTable} from "./PersonsTable";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       persons : [],
       date: new Date().toString()
    }
  }
     componentDidMount() {
      console.warn('mount');

      setInterval(() => {
        this.setState({
          date: new Date().toString
        })
        
      }, 60000);

      setTimeout(() => {
        console.warn("loaded");
        this.setState({
          persons:[
            { 
              "id": "a123",
              "firstName": "Oana",
              "lastName":"Coman",
              "url": "https://github.com/"
          },
          {  
             "id": "b654",
              "firstName": "Paul",
              "lastName":"Coman",
              "url": "https://github.com/"
          
          }
          ]
        })
      }, 2000);
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
 