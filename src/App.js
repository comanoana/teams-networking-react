import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { PersonsTable } from "./PersonsTable";
import { FilterContainer} from "./filter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       date: new Date().toString()
    }
  }
     componentDidMount() {  
      setInterval(() => {
        this.setState({
          date: new Date().toString
        })
         
      }, 60000);
      
      this.props.onLoad();
    }

     add(person) {
        document.getElementById('main-form').reset();
        this.props.onAdd(person)
      }

     render() {
        const f = this.props.filter;
        const persons = this.props.persons.filter(person => person.firstName.toLowerCase().indexOf(f) > -1);
        return (
          <div>
            <h1>Teams Networking</h1>
            <div>
              <FilterContainer />
            </div>
            <PersonsTable 
              persons={persons}
              border={1}
              onSubmit={person => {
                this.add(person);
              }}
              onDelete={id => {
                this.props(id);
              }}
            />
            <div>{this.state.date}</div>
          </div>
        );
    }
}
  
const mapStateToProps = state => ({
  persons: state.persons,
  filter: state.filter
  
}); 
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch({type: 'PERSONS_LOAD' }),
  onAdd: person => dispatch({type: 'PERSON_ADD', person}),
  onDelete: id => dispatch({type: 'PERSON_REMOVE', id })
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
  