var Dispatcher = require('../dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var PostConstants = require('../constants/postConstants.js');
var CommentConstants = require('../constants/commentConstants.js');
var PhotoConstants = require('../constants/photoConstants.js');

module.exports = {
  receiveAllUsers: function (users) {
    Dispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveAllPosts: function (posts) {
    Dispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveSinglePost: function (post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  createNewPost: function (post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_CREATED,
      post: post
    });
  },

  deletePost: function (post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_DELETED,
      post: post
    });
  },

  receiveAllComments: function (comments) {
    Dispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveSingleComment: function (comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  createNewComment: function (comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.COMMENT_CREATED,
      comment: comment
    });
  },

  deleteComment: function (comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.COMMENT_DELETED,
      comment: comment
    });
  },
  receiveAllPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveSinglePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  createNewPhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_CREATED,
      photo: photo
    });
  },

  updatePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_UPDATED,
      photo: photo
    });
  },

  deletePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_DELETED,
      photo: photo
    });
  }
}
