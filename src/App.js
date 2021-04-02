import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { PersonsTable } from "./PersonsTable";


class App extends Component {
  constructor(props) {
    super(props);
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
      
      load() {}
       
      add(person) {
        console.warn('person', person);
        document.getElementById('main-form').reset();
    
        fetch("http://localhost:3000/teams-json/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(person)
        })
          .then(res => res.json())
          .then(r => {
            console.warn(r);
            if (r.success) {
              person.id = r.id;
              this.props.onAdd(person);
            }
          });
      }
    
      remove(id) {
        fetch("http://localhost:3000/teams-json/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id })
        }).then(r => r.json()).then(status => {
          this.props.onDelete(id);
        });
      }

      render() {
        return (
          <div>
            <h1>Teams Networking</h1>
            <div>Search</div>
            <PersonsTable 
              persons={this.props.persons}
              border={1}
              onSubmit={person => {
                this.add(person);
              }}
              onDelete={id => {
                this.remove(id);
              }}
            />
            <div>{this.state.date}</div>
          </div>
        );
    }
}
  
const mapStateToProps = state => ({
  
  persons: state.persons
  
}); 
const mapDispatchToProps = dispatch => ({
  onAdd: (person) => {
    dispatch({type: 'PERSON_ADDED', person})
  },
  onDelete: id => dispatch({type: 'PERSON_REMOVED', id })
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
  