var React = require('react');
var PropTypes = React.PropTypes;

var FriendButton = React.createClass({
  removeFriend: function() {
    ApiUtil.removeFriend(this.props.params.user_id)
    this.setState({areFriends: false})
  },

  sendFriendRequest: function() {
    ApiUtil.sendFriendRequest(this.props.params.user_id)
    this.setState({areFriends: true})
  },

  friendButton: function() {
    if(this.props.currentProfileId == window.currentUserId){
      return null
    }
    else if (this.state.areFriends){
      return (
        <a className="togglefriend"  title="togglefriend">
          <span className="rightbotomimagewrap"></span>
          <div onClick={this.removeFriend}>Unfriend</div>
        </a>
      )
    }
    else {
      return(
        <a className="togglefriend" title="togglefriend">
          <span className="rightbotomimagewrap"></span>
          <div onClick={this.sendFriendRequest}>Add Friend</div>
        </a>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.friendButton()}
      </div>

    );
  }

});

module.exports = FriendButton;
