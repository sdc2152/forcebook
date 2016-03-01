var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
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
      UserStore.__emitChange();
      break;
  }
};


UserStore.all = function (){
  return _users
};

var resetUsers = function (users) {
  _users = users
};

var resetUser = function (user) {
  console.log(user.id);
  _user = user;
};

UserStore.resetUser = function (userNow) {
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
    if (user.id === userId){
      foundUser = user
    }
  })
  return foundUser
}


module.exports = UserStore;
