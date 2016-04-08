var React = require('react');
var CommentForm = require('./commentForm');
var ReplyIndex = require('./replyIndex');
var ApiUtil = require('../../util/apiUtil');
var PhotoShow = require('../photos/photoShow');
var hashHistory = require('react-router').hashHistory;



var CommentIndexItem = React.createClass({


  deleteComment: function(event) {
    event.preventDefault();

    var comment = this.props.comment
    ApiUtil.deleteComment(comment)
  },

  _onClick: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.post.author_id)
  },

  render: function() {
    var date = new Date(this.props.comment.created_at)
    date = 'posted: ' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
    var username = this.props.comment.user.first_name + " " + this.props.comment.user.last_name
    return (
      <li>
        <div className="commentexpandwrapper">
          {this.props.comment.user.id === window.currentUserId ? <a className="delete comment clicktext" onClick={this.deleteComment}></a> : null }
        </div>
        <PhotoShow url={this.props.comment.user.prof_url} type="profile_pic comment_pic"/>
        <div className="indcommentwrapper">
          <div className="commentcontent">
            <div className="commenthide">

            </div>


            <div className="commentbodywrapper">
              <div className="commentauthorwrapper">
                <span onClick={this._onClick} className="commentauthor">
                  {username}
                </span>
              </div>
              {this.props.comment.body}
              <div className="commentbottom"></div>
            </div>

            <div className="responsewrapper">
              <a className="likea">
                like
              </a>
              <span>-</span>
              <a className="replya">
                reply
              </a>
              <span>-</span>
              <div className="commentdate">{date}</div>
            </div>
          </div>
        </div>
        <ReplyIndex />
      </li>
    );
  }
});


module.exports = CommentIndexItem;
