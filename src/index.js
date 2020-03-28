import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import for bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";



import App from './App/App';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     appReducers,
//     composeEnhancer(applyMiddleware(thunk))
// );

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
      
//     </Provider>, 
//     document.getElementById('root')
// );
ReactDOM.render(
  
        <App />
      
   , 
    document.getElementById('root')
);