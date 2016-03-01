var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.js');

var CommentForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {author_id: window.currentUserId, body: '', post_id: this.props.post.id, reply_id: this.props.reply}
  },

  createComment: function (event) {
    event.preventDefault();

    ApiUtil.createNewComment(this.state)
    this.setState({body: ''});
  },

  render: function() {
    return (
      <div className="commentformwrapper">

        <form className='commentform' onSubmit={this.createComment}>
          <div className="commenttabs">
          </div>

          <div className="commentarea">
            <label htmlFor='comment_body'></label>
            <input
              type='textarea'
              id='comment_body'
              valueLink={this.linkState("body")}
              placeholder="Write a comment ..."
            />
        </div>
      </form>
    </div>
    );
  }

});

module.exports = CommentForm;
