var React = require('react');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var ProfileLeft = require('./profileLeft');
var PostIndex = require('./posts/postIndex.jsx');



var UserProfile = React.createClass({

  getInitialState: function () {
    return { user: UserStore.find(window.currentUserId)};
  },

  _onChange: function() {
    this.setState({user: UserStore.find(window.currentUserId)})
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this._onChange);
    ApiUtil.fetchAllUsers();
  },

  componentWillUnmount: function(){
    this.listener.remove()
  },

  render: function() {
    if (this.state.user !== undefined){
      return (
        <div id="userprofwrapper">
          <div id="usercontentwrapper">
            <div id="leftmain">
              <ProfileLeft user={this.state.user}/>
            </div>
            <div id="rightmain">
              <div id="rightcol">
              </div>
              <div id="content">
                <PostIndex user={this.state.user}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }

});

module.exports = UserProfile;
