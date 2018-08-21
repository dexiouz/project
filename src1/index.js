import React from 'react';//import react virtual lib from react
import ReactDOM from 'react-dom';//the react virtual dom imported from react-DOm
import {BrowserRouter} from 'react-router-dom';
import './styles/index.css';
//import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));//render is to display,it takes two arguments, first is what you want to display and second is where you want it to display it. We have imported our 'App', so we render it ---<App/>--- at 'root'. The root is inside the index.html,<div id = 'root'><App/></div> 
registerServiceWorker();
