var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var FriendConstants = require('../constants/friendConstants.js');
var FriendStore = new Store(AppDispatcher);

var _friends = [];
var _friend = [];
var _request = [];
var _request = [];


FriendStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case FriendConstants.FRIENDS_RECEIVED:
      resetFriends(payload.friends)
      break;
    case FriendConstants.REMOVE_FRIEND:
      console.log(payload);
      resetFriends(payload.friends)
      break;
  }
};

resetFriends = function (friends) {
  _friends = friends
  FriendStore.__emitChange()
};

removeFriend = function(friend) {
  var friends = [];
  _friends.forEach(function(el, idx){
    if (el.id !== friend.id){
      friends.push(el)
    }
  })
  resetFriends(friends)
};




FriendStore.allFriends = function (){
  return _friends
};

FriendStore.areFriends = function (friendId){
  var rf = false
  _friends.forEach(function(friend, idx){
    if (friend.id === parseInt(friendId)){
      rf = true
    }
  })
  console.log(rf);
  return rf
};

addFriend = function(friend) {
  _friends = [friend].concat(_friends)
  FriendStore.__emitChange()
};

resetFriends = function (friends) {
  _friends = friends
  FriendStore.__emitChange()
};


FriendStore.find = function (friendId) {
  var foundFriend;
  _friends.forEach(function (friend) {
    if (friend.id === friendId){
      foundFriend = friend
    }
  })
  return foundFriend
}


module.exports = FriendStore;
