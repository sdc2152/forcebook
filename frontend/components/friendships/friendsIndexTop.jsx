var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var FriendStore = require('../../stores/friendStore');
var FriendIndexTopItem = require('./friendIndexTopItem');
var PhotoShow = require('../photos/photoShow');



var FriendsIndexTop = React.createClass({

  getInitialState: function(){
    return {friends: FriendStore.topNine()}
  },

  componentDidMount: function () {
    this.listener = FriendStore.addListener(this._onChange);
    ApiUtil.fetchAllFriends(this.props.currentProfileId);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({friends: FriendStore.topNine()})
  },


  render: function() {

    return (
      <div>
        <ul>
          {this.state.friends.map(function (friend, idx) {
            return <FriendIndexTopItem key={idx} friend={friend}/>
          }.bind(this))}
        </ul>
      </div>
      )}
    })

module.exports = FriendsIndexTop;
