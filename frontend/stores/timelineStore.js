var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var TimelineConstants = require('../constants/aggregateConstants.js');
var LikeConstants = require('../constants/likeConstants.js');
var TimelineStore = new Store(AppDispatcher);

var _timeline = []

var _likes = {};

TimelineStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case TimelineConstants.TIMELINE_RECEIVED:
      resetTimeline(payload.timeline)
      break;
    case TimelineConstants.POST_DELETED:
      removeTimelineItem(payload)
      break;
    case TimelineConstants.POST_CREATED:
      addTimelineItem(payload)
      break;
    case LikeConstants.TIMELINE_LIKE_UPDATED:
      addTimelineLike(payload.data.like)
      break;
    case LikeConstants.TIMELINE_LIKE_DELETED:
      removeTimelineLike(payload.data.like)
      break;
    }

};


addTimelineItem = function(payload) {
  _timeline.unshift(payload.post)
  TimelineStore.__emitChange()
};

removeTimelineItem = function(payload) {
  var timeline = [];
  _timeline.forEach(function(el, idx){
    if (el.id !== payload.post.id){
      timeline.push(el)
    }
  })
  _timeline = timeline
  TimelineStore.__emitChange()
};

resetTimelineLikes = function(){
  _timeline.forEach(function(item){
    _likes[item.id] = item.likes
  })
  TimelineStore.__emitChange()
};

addTimelineLike = function(like) {
  if (_likes[like.post_id] === undefined || _likes[like.post_id].length < 1 ) {
    _likes[like.post_id] = [like]
  }
  else {
    _likes[like.post_id] = _likes[like.post_id].push(like)
  }
  TimelineStore.__emitChange()
};

removeTimelineLike = function(like) {
  var index = _likes[like.post_id].indexOf(like)
  _likes[like.post_id].splice(index, 1)
  TimelineStore.__emitChange()
};


TimelineStore.fetchLikes = function (postId){
  if (_likes[postId] !== undefined) {
    return _likes[postId]
  }
  else{
    return []
  }
};


removePost = function(post) {
  var idx = _timeline.indexOf(post)
  if ( idx !== -1){
    _timeline.splice(idx, 1)
    TimelineStore.__emitChange()
  }
  resetTimelineLikes()
};

addPost = function(post) {
  _timeline.unshift(payload.post)
  TimelineStore.__emitChange()
  resetTimelineLikes()
};



TimelineStore.timeline = function (){
  return _timeline
};

resetTimeline = function (timeline) {
  console.log();
  _timeline = timeline
  resetTimelineLikes()
};


module.exports = TimelineStore;
