var React = require('react');
var PostStore = require('../../stores/postStore');
var ApiUtil = require('../../util/apiUtil');
var CommentIndex = require('../comments/commentIndex');
var PhotoShow = require('../photos/photoShow');
var LikeButton = require('../likes/likeButton');
var ShareModal = require('../shareModal');
var DeletePostModal = require('../deletePostModal');
var hashHistory = require('react-router').hashHistory;

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

  compomentWillRecieveProps: function (newProps) {
    clearInterval(this.interval)
  },

  compomentWillUnmount: function () {
    clearInterval(this.interval)
  },

  _onClick: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.post.author_id)
  },

  render: function() {
    return (
      <div>
        <li className="postandcommentwrapper">
          {this.props.user.id === window.currentUserId ? <DeletePostModal post={this.props.post}/> : null}
          <div className="indpostwrapper">
            <div className="postwrapper">

              <div clasName="postcontent">

                <div className="posterinfo">
                  <div className="profilepicwrapper">
                    <PhotoShow url={this.props.user.prof_url} type="profile_pic" />
                  </div>

                  <div onClick={this._onClick} className="postusername" >
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
                  <LikeButton likeType="post" post={this.props.post} />
                  <ShareModal post={this.props.post} current={this.props.currentPage}/>
                </div>

              </div>

            </div>
          </div>
          <CommentIndex key={this.props.key} post={this.props.post} comments={this.props.post.comments}/>
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
