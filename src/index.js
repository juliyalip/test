import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import {
  BrowserRouter,
 
} from "react-router-dom";
import './index.css';
import App from './App';


console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      
      <App />
    
      </BrowserRouter>
      </Provider>
     
  </React.StrictMode>,
  document.getElementById('root')
);


