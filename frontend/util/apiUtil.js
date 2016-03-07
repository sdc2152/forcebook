var ApiActions = require('../actions/apiActions.js');

module.exports = {


  executeSearch: function(searchTerms){
    $.ajax({
      url: 'api/search/',
      method: 'get',
      dataType: 'json',
      data: {searchTerms: searchTerms},
      success: function (results) {
        ApiActions.receiveSearchResults(results)
      }
    });
  },


  fetchAllUsers: function () {
    $.ajax({
      url: "api/users",
      success: function (users) {
        ApiActions.receiveAllUsers(users);
      }
    })
  },


  fetchSingleUser: function (id) {
    $.ajax({
      url: "api/users/" + id,
      success: function (user) {
        ApiActions.receiveSingleUser(user);
      }
    })
  },

  fetchAllPosts: function (userId) {
    $.ajax({
      url: "api/users/" + userId + "/posts",
      success: function (posts) {
        ApiActions.receiveAllPosts(posts);
      }
    })
  },


  fetchSinglePost: function () {
    $.ajax({
      url: "api/post/" + id,
      success: function (posts) {
        ApiActions.receiveAllPosts(posts);
      }
    })
  },
  createNewPost: function (post) {
    $.ajax({
      method: "POST",
      url: "api/posts/",
      dataType: "json",
      data: {post: post},
      success: function (post) {
        ApiActions.createNewPost(post);
      }
    })
  },
  sharePost: function (post) {
    $.ajax({
      method: "POST",
      url: "api/posts/",
      dataType: "json",
      data: {post: post},
      success: function (post) {
        ApiActions.createNewPost(post);
      }
    })
  },


  deletePost: function (post) {
    $.ajax({
      method: "DELETE",
      url: "api/posts/" + post.id,
      dataType: "json",
      data: {post: post},
      success: function (post) {
        ApiActions.deletePost(post);
      }
    })
  },

  fetchAllComments: function () {
    $.ajax({
      url: "api/comments",
      success: function (comments) {
        ApiActions.receiveAllComments(comments);
      }
    })
  },

  fetchPostComments: function (id) {
    $.ajax({
      url: "api/posts/" + id + "comments",
      success: function (comments) {
        ApiActions.receiveAllComments(comments);
      }
    })
  },

  fetchSingleComment: function () {
    $.ajax({
      url: "api/comment/" + id,
      success: function (comments) {
        ApiActions.receiveAllComments(comments);
      }
    })
  },
  createNewComment: function (comment) {
    $.ajax({
      method: "POST",
      url: "api/comments/",
      dataType: "json",
      data: {comment: comment},
      success: function (comment) {
        ApiActions.createNewComment(comment);
      }
    })
  },
  shareComment: function (comment) {
    $.ajax({
      method: "POST",
      url: "api/comments/",
      dataType: "json",
      data: {comment: comment},
      success: function (comment) {
        ApiActions.createNewComment(comment);
      }
    })
  },
  deleteComment: function (comment) {
    $.ajax({
      method: "DELETE",
      url: "api/comments/" + comment.id,
      dataType: "json",
      data: {comment: comment},
      success: function (comment) {
        ApiActions.deleteComment(comment);
      }
    })
  },
  fetchAllPhotos: function () {
    $.ajax({
      url: "api/photos",
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  },
  fetchSinglePhoto: function () {
    $.ajax({
      url: "api/photo/" + id,
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  },
  createNewPhoto: function (photo) {
    console.log(photo);
    $.ajax({
      method: "POST",
      url: "api/photos/",
      dataType: "json",
      data: {photo: photo},
      success: function (photo) {
        ApiActions.createNewPhoto(photo);
      }
    })
  },
  sharePhoto: function (photo) {
    $.ajax({
      method: "POST",
      url: "api/photos/",
      dataType: "json",
      data: {photo: photo},
      success: function (photo) {
        ApiActions.createNewPhoto(photo);
      }
    })
  },
  deletePhoto: function (photo) {
    $.ajax({
      method: "DELETE",
      url: "api/photos/" + photo.id,
      dataType: "json",
      data: {photo: photo},
      success: function (photo) {
        ApiActions.deletePhoto(photo);
      }
    })
  },






  fetchAllFriends: function (userId) {
    $.ajax({
      url: "api/users/" + userId + "/friendships",
      success: function (friends) {
        ApiActions.receiveAllFriends(friends);
      }
    })
  },

  removeFriend: function (friendId) {
    $.ajax({
      type: "DELETE",
      url: "api/friendships/destroy",
      data: {friendId: friendId},
      success: function (data) {
        ApiActions.removeFriend(data.friends);
      }
    })
  },

  sendFriendRequest: function (friendId) {
    $.ajax({
      type: "POST",
      url: "api/friendships",
      data: {friendId: friendId},
      success: function (data) {
        ApiActions.sendFriendRequest(data.friendRequest);
      }
    })
  },



  fetchTimelineItems: function () {
    $.ajax({
      url: "api/timeline",
      success: function (timeline) {
        ApiActions.receiveTimeline(timeline);
      }
    })
  },


  logOut: function () {
    $.ajax({
      type: "DELETE",
      url: "session",
      dataType: 'json',
      success: function (whatever) {
        window.location.replace("home");
      }
    });
  }
}
