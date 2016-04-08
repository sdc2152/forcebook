var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var PostStore = require('../../stores/postStore');

var LikeButton = React.createClass({
  getInitialState: function() {
    return {likes: PostStore.fetchLikes(this.props.post.id)}
  },

  componentDidMount: function() {
    this.listener = PostStore.addListener(this._onChange)
  },

  componentWillUnmount: function() {
    this.listener.remove()
  },

  _onChange: function() {
    this.setState({likes: PostStore.fetchLikes(this.props.post.id)})
  },

  handleClick: function(event) {
    var likeStatus = this.haveLiked()
    event.preventDefault()
    if (likeStatus !== false) {
      ApiUtil.deleteLike(this.props.post.id, likeStatus.id)
    }
    else {
      ApiUtil.createLike(this.props.post.id)
    }
  },

  haveLiked: function() {
    var ans = false
    this.state.likes.forEach(function(like){
      if (like.author_id == window.currentUserId) {
        ans = like
      }
    })
    return ans
  },

  render: function() {
    var text = this.haveLiked() === false ? "Like" : "Unlike"
    var num = this.state.likes.length > 0 ? this.state.likes.length + " Like": null
    this.state.likes.length > 1 ? num += 's ' : null
    return (
      <div className="likewrapper">
        {num}{' '}
        <a className="clickable" onClick={this.handleClick}>
          {text}
        </a>
      </div>
    );
  }

});

module.exports = LikeButton;
