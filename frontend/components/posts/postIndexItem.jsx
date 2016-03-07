var React = require('react');
var PostStore = require('../../stores/postStore');
var ApiUtil = require('../../util/apiUtil');
var CommentIndex = require('../comments/commentIndex');
var PhotoShow = require('../photos/photoShow');

var PostIndexItem = React.createClass({
  getInitialState: function(){
    return {creationDate: this._timeSincePost()}
  },

  componentDidMount: function() {
    var that = this
    this.interval = setInterval(function(){
      that.setState({creationDate: that._timeSincePost()})}.bind(that),
      360000
    )
  },

  compomentWillUnmount: function () {
    this.clearInterval(this.interval)
  },

  sharePost: function(event) {
    event.preventDefault();

    var body = this.props.post.body
    var currentUser = window.currentUserId
    ApiUtil.sharePost({body: body, author_id: currentUser})
  },

  deletePost: function(event) {
    event.preventDefault();

    var post = this.props.post
    ApiUtil.deletePost(post)
  },

  render: function() {
    return (
      <div>
        {this.props.user.id === this.props.post.author_id ? <a onClick={this.deletePost}>delete</a> : null }
        <li className="postandcommentwrapper">
          <div className="indpostwrapper">
            <div className="postwrapper">

              <div clasName="postcontent">

                <div className="posterinfo">
                  <div className="profilepicwrapper">
                    <PhotoShow url={this.props.user.prof_url} type="profile_pic" />
                  </div>

                  <div className="postusername">
                    {this.props.user.first_name} {this.props.user.last_name}
                  </div>

                  <div className="posttime">
                    {this.state.creationDate}
                  </div>
                </div>

                <div clasName="postbdy">
                  <div className="postcontent">
                    {this.props.post.body}
                  </div>
                </div>

              </div>

              <div className="commentformwrapper">

                <div clasName="postcommentform">
                  <a>Like</a>
                  <a>Comment</a>
                  <a onClick={this.sharePost}>Share</a>
                </div>

              </div>

            </div>
          </div>
          <CommentIndex post={this.props.post} comments={this.props.post.comments}/>
        </li>
        <div className="breakdiv"></div>
      </div>
    );
  },


  _timeSincePost: function() {
    var seconds = Math.floor((new Date() - Date.parse(this.props.post.created_at)) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        var time = years === 1 ? " year" : " years"
        return "posted " + interval.toString() + time + " ago"
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        var time = interval === 1 ? " month" : " months"
        return "posted " + interval.toString() + time + " ago"
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        var time = interval === 1 ? " day" : " days"
        return "posted " + interval.toString() + time + " ago"
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        var time = interval === 1 ? " hour" : " hours"
        return "posted " + interval.toString() + time + " ago"
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        var time = interval === 1 ? " minute" : " minutes"
        return "posted " + interval.toString() + time + " ago"
    }
    return "less than a minute";
  },

});

module.exports = PostIndexItem;
