var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var CommentConstants = require('../constants/commentConstants.js');
var CommentStore = new Store(AppDispatcher);

var _comments = [];
var _comment = [];


CommentStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case CommentConstants.COMMENT_RECEIVED:
      resetComment(payload.comment)
      CommentStore.__emitChange()
      break;
    case CommentConstants.COMMENTS_RECEIVED:
      resetComments(payload.comments)
      CommentStore.__emitChange()
      break;
    case CommentConstants.COMMENT_CREATED:
      addComment(payload.comment)
      CommentStore.__emitChange()
      break;
    case CommentConstants.COMMENT_DELETED:
      removeComment(payload.comment)
      break;
  }
};

CommentStore.all = function (){
  return _comments
};

removeComment = function(comment) {
  var comments = [];
  _comments.forEach(function(el, idx){
    if (el.id !== comment.id){
      comments.push(el)
    }
  })
  resetComments(comments)
};

addComment = function(comment) {
  _comments = [comment].concat(_comments)

};

resetComments = function (comments) {
  _comments = comments
  CommentStore.__emitChange()
};

resetComment = function (comment) {
  _comment = comment;
};

CommentStore.find = function (commentId) {
  var foundComment;
  _comments.forEach(function (comment) {
    if (comment.id === commentId){
      foundComment = comment
    }
  })
  return foundComment
}

CommentStore.findByPostId = function (postId) {
  var foundComments = [];
  _comments.forEach(function (comment) {
    if (comment.post_id === postId){
      foundComments.unshift(comment)
    }
  })

  if (foundComments.length < 1){
    return undefined
  }
  else {
    return foundComments
  }
}


module.exports = CommentStore;
