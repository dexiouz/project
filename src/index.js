import React from 'react';//import react virtual lib from react
import ReactDOM from 'react-dom';//the react virtual dom imported from react-DOm
import './styles/index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import Details from './components/Details'
import Login from './components/Login'
import App from './components/App';
import Header from './components/Header';
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './components/AppRouter'

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
