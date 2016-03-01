var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var PostConstants = require('../constants/postConstants.js');
var PostStore = new Store(AppDispatcher);

var _posts = [];
var _post = [];


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
      break;
  }
};

PostStore.all = function (){
  return _posts
};

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
  PostStore.__emitChange()
};

resetPost = function (post) {
  _post = post;
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


module.exports = PostStore;
