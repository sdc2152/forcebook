var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var aggregateConstants = require('../constants/aggregateConstants.js');
var UserStore = new Store(AppDispatcher);

var _users = [];
var _user = [];


UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user)
      UserStore.__emitChange();
      break;
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users)
      break;
  }
};

UserStore.changeDisplayedUser = function(newUserId){
  _displayedUser = find(newUserId)
};

UserStore.displayedUser = function() {
  return _displayedUser
};

UserStore.all = function (){
  return _users
};

var resetUsers = function (users) {
  _users = users
  UserStore.__emitChange();
};

var find = function (userId) {
  var foundUser;
  _users.forEach(function (user) {
    if (user.id == userId){
      foundUser = user
    }
  })
  return foundUser
};

var resetUser = function (user) {
  _user = user;
};

UserStore.resetCurrentUser = function (userNow) {
  var index = 0;
  _users.forEach(function(user, i) {
    if (user.id === userNow.id) {
      index = i;
    }
  });
  _users[index] = userNow;
};

UserStore.find = function (userId) {
  var foundUser;
  _users.forEach(function (user) {
    if (user.id == userId){
      foundUser = user
    }
  })
  return foundUser
},


module.exports = UserStore;
