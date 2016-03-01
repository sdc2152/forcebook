var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var UserProfile = require('./components/userProfile.jsx');
var Header = require('./components/header.jsx');
var PostIndex = require('./components/posts/postIndex');
var PostIndexItem = require('./components/posts/postIndexItem');
var UserSettings = require('./components/userSettings');
var UserPhotos = require('./components/userPhotos');


var hashHistory = require('react-router').hashHistory;
var ApiUtil = require('./util/apiUtil.js');



var App = React.createClass({

  render: function () {
    if(window.currentUserId !== undefined){
      return(
        <div id="pagewrap">
          <Header/>
          {this.props.children}
        </div>
      );
    }
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={UserProfile} />
    <Route path="users/:user_id" component={UserSettings} >
      <Route path="/photos" component={UserPhotos} />
    </Route>
  </Route>
);

 document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
      <Router history={hashHistory}>{ routes }</Router>,
      document.getElementById('root'));
 });
