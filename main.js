import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import App from './App.jsx';
import home from './home.jsx';
import about from './about.jsx';
import contact from './contact.jsx';


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {home} />
         <Route path = "home" component = {home} />
         <Route path = "about" component = {about} />
         <Route path = "contact" component = {contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))