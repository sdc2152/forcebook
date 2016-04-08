var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var UserProfile = require('./components/userProfile.jsx');
var Header = require('./components/header.jsx');
var PostIndex = require('./components/posts/postIndex');
var PhotoIndex = require('./components/photos/photoIndex');
var PostIndexItem = require('./components/posts/postIndexItem');
var UserSettings = require('./components/userSettings');
var About = require('./components/about');
var FriendsIndex = require('./components/friendships/friendsIndex');


var hashHistory = require('react-router').hashHistory;
var ApiUtil = require('./util/apiUtil.js');
var Modal = require('react-modal');


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
    <IndexRoute component={UserProfile}></IndexRoute>
    <Route path="users/:user_id" component={UserSettings} >
      <IndexRoute component={PostIndex}></IndexRoute>
      <Route path="timeline" component={PostIndex}></Route>
      <Route path="about" component={About}></Route>
      <Route path="friends" component={FriendsIndex}></Route>
      <Route path="photos" component={PhotoIndex}></Route>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('root')
  Modal.setAppElement(container);
  ReactDOM.render(
    <Router history={hashHistory}>{ routes }</Router>,
      container);
});
