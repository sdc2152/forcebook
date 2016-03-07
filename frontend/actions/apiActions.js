var Dispatcher = require('../dispatcher.js');
// var UserConstants = require('../constants/userConstants.js');
// var PostConstants = require('../constants/postConstants.js');
// var CommentConstants = require('../constants/commentConstants.js');
// var PhotoConstants = require('../constants/photoConstants.js');
// var FriendConstants = require('../constants/friendConstants.js');
// var SearchConstants = require('../constants/searchConstants.js');
var Constants = require('../constants/aggregateConstants.js');



module.exports = {

  receiveSearchResults: function (results) {
    Dispatcher.dispatch({
      actionType: Constants.RESULTS_RECEIVED,
      results: results
    })
  },

  receiveAllUsers: function (users) {
    Dispatcher.dispatch({
      actionType: Constants.USERS_RECEIVED,
      users: users
    });
  },

  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: Constants.USER_RECEIVED,
      user: user
    });
  },

  receiveAllPosts: function (posts) {
    Dispatcher.dispatch({
      actionType: Constants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveSinglePost: function (post) {
    Dispatcher.dispatch({
      actionType: Constants.POST_RECEIVED,
      post: post
    });
  },

  createNewPost: function (post) {
    Dispatcher.dispatch({
      actionType: Constants.POST_CREATED,
      post: post
    });
  },

  deletePost: function (post) {
    Dispatcher.dispatch({
      actionType: Constants.POST_DELETED,
      post: post
    });
  },

  receiveAllComments: function (comments) {
    Dispatcher.dispatch({
      actionType: Constants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveSingleComment: function (comment) {
    Dispatcher.dispatch({
      actionType: Constants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  createNewComment: function (comment) {
    Dispatcher.dispatch({
      actionType: Constants.COMMENT_CREATED,
      comment: comment
    });
  },

  deleteComment: function (comment) {
    Dispatcher.dispatch({
      actionType: Constants.COMMENT_DELETED,
      comment: comment
    });
  },
  receiveAllPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: Constants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveSinglePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: Constants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  createNewPhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: Constants.PHOTO_CREATED,
      photo: photo
    });
  },

  updatePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: Constants.PHOTO_UPDATED,
      photo: photo
    });
  },

  deletePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: Constants.PHOTO_DELETED,
      photo: photo
    });
  },





  receiveAllFriends: function (friends) {
    Dispatcher.dispatch({
      actionType: Constants.FRIENDS_RECEIVED,
      friends: friends
    });
  },


  receiveTimeline: function (timeline) {
    Dispatcher.dispatch({
      actionType: Constants.TIMELINE_RECEIVED,
      timeline: timeline
    });
  },


  removeFriend: function(friends){
    Dispatcher.dispatch({
      actionType: Constants.REMOVE_FRIEND,
      friends: friends
    });
  },

  sendFriendRequest: function(friendRequest){
    Dispatcher.dispatch({
      actionType: Constants.REQUEST_FRIEND,
      friendRequest: friendRequest
    });
  }

}
