var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var LikeConstants = require('../constants/likeConstants.js');
var LikeStore = new Store(AppDispatcher);

var _likes = {};


LikeStore.__onDispatch = function(payload){
  console.log(payload);
  switch(payload.actionType) {
    case LikeConstants.LIKE_UPDATED:
      addLike(payload.like)
      break;
    case LikeConstants.COMMENT_CREATED:
      addLike(payload.like)
      break;
    case LikeConstants.COMMENT_DELETED:
      removeLike(payload.like)
      break;
  }
};

resetLikes = function (payload) {
  _Likes[like] += like
  LikeStore.__emitChange()
};

addLike = function(like) {
  console.log(like);
  _Likes[like] += like
  LikeStore.__emitChange()
};

removeLike = function(like) {
  var likes = [];
  _likes.forEach(function(el, idx){
    if (el.id !== like.id){
      likes.push(el)
    }
  })
  resetLikes(likes)
};
