import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { persons} from './persons/reducer';
import {filter, count} from './filter/reducer';

const rootReducer =  combineReducers({
  persons,
  count,
  filter
});

// used for async actions
const personsMdl = store => next => action => {
  switch(action.type) {
    case 'PERSONS_LOAD': {
      fetch("http://localhost:3000/teams-json")
        .then(res => res.json())
        .then(persons=> {
          store.dispatch({ type: 'PERSONS_LOADED', persons });
        });
      break;
    }
    case 'PERSON_ADD': {
      const person = action.person;
      fetch("http://localhost:3000/teams-json/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
      })
        .then(res => res.json())
        .then(r => {
          if (r.success) {
            person.id = r.id;
            store.dispatch({ type: 'PERSON_ADDED', person });
          }
        });
      break;
    }
    case 'PERSON_REMOVE': {
      fetch("http://localhost:3000/teams-json/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: action.id })
      }).then(r => r.json()).then(status => {
        store.dispatch({ type: 'PERSON_REMOVED', id: action.id })
      });
      break;
    }
    default: 
      break;
  }
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(personsMdl))

ReactDOM.render(
   <Provider store={store}>
    <App /> 
   </ Provider>,
  document.getElementById('root')  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()