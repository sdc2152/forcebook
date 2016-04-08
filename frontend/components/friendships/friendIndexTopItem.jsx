var React = require('react');
var FriendStore = require('../../stores/friendStore');
var ApiUtil = require('../../util/apiUtil');
var PhotoShow = require('../photos/photoShow');
var hashHistory = require('react-router').hashHistory;
var UserStore = require('../../stores/userStore');

var FriendIndexTopItem = React.createClass({
  getInitialState: function(){
    return {friend: this.props.friend}
  },

  redirectToProfile: function(event) {
    event.preventDefault()
    hashHistory.push('users/' + this.props.friend.id)
  },

  render: function() {
    return (
      <div className="inline" onClick={this.redirectToProfile} >
        <PhotoShow url={this.props.friend.prof_url} type="albumphoto"/>
      </div>
    );
  },


});

module.exports = FriendIndexTopItem;
