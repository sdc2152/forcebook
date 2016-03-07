var React = require('react');
var CommentForm = require('./commentForm');
var ReplyIndex = require('./replyIndex');
var ApiUtil = require('../../util/apiUtil');
var PhotoShow = require('../photos/photoShow');


var CommentIndexItem = React.createClass({


  deleteComment: function(event) {
    event.preventDefault();

    var comment = this.props.comment
    ApiUtil.deleteComment(comment)
  },


  render: function() {
    var date = new Date(this.props.comment.created_at)
    date = 'posted: ' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
    var username = this.props.comment.user.first_name + " " + this.props.comment.user.last_name
    return (
      <li>
        {window.currentUserId === this.props.comment.author_id ? <a onClick={this.deleteComment}>delete</a> : null }
        <div className="indcommentwrapper">
          <div className="commentcontent">
            <div className="commenthide">

            </div>


            <div className="commentbodywrapper">
              <div className="commentauthorwrapper">
                <span className="commentauthor">
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
