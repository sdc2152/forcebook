var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var PostStore = require('../../stores/postStore.js');
var PostIndexItem = require('./postIndexItem');
var PostForm = require('./postForm');


var PostIndex = React.createClass({

  getInitialState: function(){
    return {posts: PostStore.all()}
  },

  componentDidMount: function () {
    this.listener = PostStore.addListener(this._onChange);
    ApiUtil.fetchAllPosts(this.props.params.user_id);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({posts: PostStore.all()})
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
              {this.state.posts.map(function (post, idx) {
                return <PostIndexItem key={idx} post={post} user={post.user}/>;
              }.bind(this))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PostIndex;
