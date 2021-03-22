import './App.css';
import {PersonsTable} from "./PersonsTable";


let persons = [
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
];

function App() {
  return (
   <div>
    <h1>Teams Networking</h1>
    <div>Search</div>
    <PersonsTable persons={persons}  border={1}/>
    </div>
  )}

export default App;
 