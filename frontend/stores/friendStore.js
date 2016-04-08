var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var FriendConstants = require('../constants/friendConstants.js');
var FriendStore = new Store(AppDispatcher);

var _friends = [];
var _friend = [];

var _requests = [];


FriendStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case FriendConstants.REQUESTS_RECEIVED:
      resetRequests(payload.requests)
      FriendStore.__emitChange()
      break;
    case FriendConstants.FRIENDS_RECEIVED:
      resetFriends(payload.friends)
      FriendStore.__emitChange()
      break;
    case FriendConstants.REMOVE_FRIEND:
      removeFriend(payload.friendship)
      removeRequest(payload.friendship)
      FriendStore.__emitChange()
      break;
    case FriendConstants.FRIENDSHIP_APPROVED:
      resetFriends(payload.friends)
      resetRequests(payload.requests)
      FriendStore.__emitChange()
      break;
  }
};

resetFriends = function (friends) {
  _friends = friends
};

removeFriend = function(friend) {
  var friends = [];
  _friends.forEach(function(el, idx){
    if (el.id !== friend.friendship.user_id && el.id !== friend.friendship.user_id){
      friends.push(el)
    }
  })
  resetFriends(friends)
};

removeRequest = function(friend) {
  var requests = [];
  _requests.forEach(function(el, idx){
    if (el.user.id !== friend.friendship.friend_id){
      requests.push(el)
    }
  })
  resetRequests(requests)
};

addFriend = function(friend) {
  _friends = [friend].concat(_friends)
};


resetRequests = function(requests) {
  _requests = requests
};



FriendStore.allRequests = function (){
  return _requests
};


FriendStore.allFriends = function (){
  return _friends
};

FriendStore.topNine = function (){
  return _friends.slice(0,9)
};

FriendStore.areFriends = function (friendId){
  var rf = false
  _friends.forEach(function(friend, idx){
    if (friend.id === parseInt(friendId)){
      rf = true
    }
  })
  return rf
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
