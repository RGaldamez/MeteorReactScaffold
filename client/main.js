import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={Header}>
        
      </Route>
    </Router>
  );
  //    <IndexRoute component = {BinsList}/>
  //    <Route path="bins/:binId" component ={BinsMain}/>
  
  Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
  });