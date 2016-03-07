var React = require('react');
var ApiUtil = require('../util/apiUtil');
var FriendStore = require('../stores/friendStore');


var FriendButton = React.createClass({

  getInitialState: function() {
    return {areFriends: FriendStore.areFriends(this.props.currentProfileId)}
  },

  _onChange: function() {
    this.setState({areFriends: FriendStore.areFriends(this.props.currentProfileId)})
  },
  componentDidMount: function() {
    this.friendListener = FriendStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.friendListener.remove()
  },

  removeFriend: function() {
    ApiUtil.removeFriend(this.props.currentProfileId)
    this.setState({areFriends: false})
  },

  sendFriendRequest: function() {
    ApiUtil.sendFriendRequest(this.props.currentProfileId)
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
