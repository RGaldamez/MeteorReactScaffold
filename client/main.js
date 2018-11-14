import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './../imports/router/Router.js';




Meteor.startup(function(){
  ReactDOM.render(<Router/>, document.getElementById('app'));
});