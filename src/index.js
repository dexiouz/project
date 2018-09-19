import React from 'react';//import react virtual lib from react
import ReactDOM from 'react-dom';//the react virtual dom imported from react-DOm
import './styles/index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login'
import App from './components/App';
import Header from './components/Header';
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './components/AppRouter';
import Backend from './components/Backend'

ReactDOM.render(<Backend/>, document.getElementById('root'));
registerServiceWorker();
