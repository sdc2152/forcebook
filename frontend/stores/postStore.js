var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var PostConstants = require('../constants/postConstants.js');
var LikeConstants = require('../constants/likeConstants.js');
var PostStore = new Store(AppDispatcher);

var _posts = [];
var _post = [];

var _likes = {};


PostStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case PostConstants.POST_RECEIVED:
      resetPost(payload.post)
      PostStore.__emitChange()
      break;
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts)
      PostStore.__emitChange()
      break;
    case PostConstants.POST_CREATED:
      addPost(payload.post)
      PostStore.__emitChange()
      break;
    case PostConstants.POST_DELETED:
      removePost(payload.post)
      PostStore.__emitChange()
      break;
    case LikeConstants.LIKE_UPDATED:
      addLike(payload.data.like)
      break;
    case LikeConstants.LIKE_DELETED:
      removeLike(payload.data.like)
      break;
    case LikeConstants.COMMENT_CREATED:
      addLike(payload.like)
      break;
    case LikeConstants.COMMENT_DELETED:
      removeLike(payload.like)
      break;
  }
};

resetLikes = function(){
  _posts.forEach(function(post){
    _likes[post.id] = post.likes
  })
};

addLike = function(like) {
  if (_likes[like.post_id] === undefined || _likes[like.post_id].length < 1 ) {
    _likes[like.post_id] = [like]
  }
  else {
    _likes[like.post_id] = _likes[like.post_id].push(like)
  }
  PostStore.__emitChange()
};

removeLike = function(like) {
  var index = _likes[like.post_id].indexOf(like)
  _likes[like.post_id].splice(index, 1)
  PostStore.__emitChange()
};


PostStore.fetchLikes = function (postId){
  if (_likes[postId] !== undefined) {
    return _likes[postId]
  }
  else{
    return []
  }
};

PostStore.all = function (){
  return _posts
};

PostStore.resetPosts = function(){
  resetPosts([])
};

PostStore.find = function (postId) {
  var foundPost;
  _posts.forEach(function (post) {
    if (post.id === postId){
      foundPost = post
    }
  })
  return foundPost
}

removePost = function(post) {
  var posts = [];
  _posts.forEach(function(el, idx){
    if (el.id !== post.id){
      posts.push(el)
    }
  })
  resetPosts(posts)
};

addPost = function(post) {
  _posts = [post].concat(_posts)

};

resetPosts = function (posts) {
  _posts = posts
  resetLikes()
};

resetPost = function (post) {
  _post = post;
  resetLikes()
};



module.exports = PostStore;
