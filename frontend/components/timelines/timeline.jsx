var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var TimelineStore = require('../../stores/timelineStore.js');
var TimelineIndexItem = require('./timelineIndexItem');
var PostForm = require('../posts/postForm');


var TimelineIndex = React.createClass({

  getInitialState: function(){
    return {timeline: TimelineStore.timeline()}
  },

  componentDidMount: function () {
    this.listener = TimelineStore.addListener(this._onChange);
    ApiUtil.fetchTimelineItems();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({timeline: TimelineStore.timeline()})
  },

  render: function() {
      return (
        <div id="rightmain">
          <div id="rightcol">
          </div>
          <div id="content">
            <PostForm user={this.props.user}/>
            <div className="postindexwrapper">
              <ul>
                {this.state.timeline.map(function (post, idx) {
                  return <TimelineIndexItem key={idx} post={post} user={post.user}/>;
                }.bind(this))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  });


module.exports = TimelineIndex;
