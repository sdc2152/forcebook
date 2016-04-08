var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var FriendStore = require('../../stores/friendStore');
var FriendIndexItem = require('./friendIndexItem');


var FriendsIndex = React.createClass({

  getInitialState: function(){
    return {friends: FriendStore.allFriends()}
  },

  componentDidMount: function () {
    this.listener = FriendStore.addListener(this._onChange);
    ApiUtil.fetchAllFriends(this.props.params.user_id);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAllFriends(newProps.params.user_id);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({friends: FriendStore.allFriends()})
  },

  render: function() {

    return (
      <ul className="friendul">
        {this.state.friends.map(function (friend, idx) {
          return <FriendIndexItem key={idx} friend={friend} user={this.props.user}/>;
        }.bind(this))}
      </ul>
      )}
    })

module.exports = FriendsIndex;
