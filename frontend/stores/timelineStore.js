var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var TimelineConstants = require('../constants/aggregateConstants.js');
var TimelineStore = new Store(AppDispatcher);

var _timeline = []


TimelineStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case TimelineConstants.TIMELINE_RECEIVED:
      resetTimeline(payload.timeline)
      break;
    case TimelineConstants.POST_DELETED:

      var timeline = [];
      _timeline.forEach(function(el, idx){
        if (el.id !== payload.post.id){
          timeline.unshift(el)
        }
      })
      _timeline = timeline
      TimelineStore.__emitChange()

      break;
    case TimelineConstants.POST_CREATED:
      // addPost(payload.post)
      _timeline.unshift(payload.post)
      TimelineStore.__emitChange()
      break;
  }
};

removePost = function(post) {
  var idx = _timeline.indexOf(post)
  if ( idx !== -1){
    _timeline.splice(idx, 1)
    TimelineStore.__emitChange()
  }
};

addPost = function(post) {
  _timeline.unshift(payload.post)
  TimelineStore.__emitChange()
};



TimelineStore.timeline = function (){
  console.log(_timeline);
  return _timeline
};

resetTimeline = function (timeline) {
  _timeline = timeline
  TimelineStore.__emitChange()
};


module.exports = TimelineStore;
