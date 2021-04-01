import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const rootReducer = (state = {persons: [] }, action) =>{
console.warn('rootReducer', state, action);
switch (action.type) {
case 'PERSONS_LOADED' : {
  return {
    persons: action.persons
  }

 }
 default:
   return state;
}
};

const store = createStore(rootReducer);
console.warn('store', store);

store.subscribe(() => {
  console.warn('data changed', store.getState());
})

store.dispatch({type: 'PERSONS_LOADED', persons: [1, 2, 3]});
store.dispatch({type: 'PERSONS_LOADED', persons: [4, 5] });

//var a = {type: 'DELETE_TEAM'}
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()