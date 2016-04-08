var React = require('react');
var CommentForm = require('./commentForm');
var CommentIndexItem = require('./commentIndexItem');
var ApiUtil = require('../../util/apiUtil.js');
var CommentStore = require('../../stores/commentStore.js');

var CommentIndex = React.createClass({
  getInitialState: function(){
    return {comments: CommentStore.findByPostId(this.props.post.id)}
  },

  componentDidMount: function () {
    this.listener = CommentStore.addListener(this._onChange);
    ApiUtil.fetchAllComments();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({comments: CommentStore.findByPostId(this.props.post.id)})
  },

  render: function() {
    {if (this.state.comments !== undefined){
      return (
        <div className="commentsandform">
          <div className="commentindexwrapper">
            <div className="likecountwrapper">
            </div>
            <ul className="commentlist">

              {this.state.comments.map(function (comment, idx) {
                return <CommentIndexItem key={idx} comment={comment} post={this.props.post}/>;
              }.bind(this))}
            </ul>
          </div>
          <CommentForm post={this.props.post}/>
        </div>
      )}
      else {
        return (
          <div>
            <CommentForm post={this.props.post} />
          </div>
        )
      }
    }
  }

});


module.exports = CommentIndex;
