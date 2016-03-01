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
    ApiUtil.fetchAllPosts();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({posts: PostStore.all()})
  },

  render: function() {
    return (
        <div>
          <PostForm user={this.props.user}/>
          <div className="postindexwrapper">
            <ul>
              {this.state.posts.map(function (post) {
                return <PostIndexItem key={post.id} post={post} user={this.props.user}/>;
              }.bind(this))}
            </ul>
          </div>
        </div>
    );
  }



  // render: function() {
  //   return (
  //     <ul>
  //       {this.state.posts.map(function (post) {
  //         return <PostIndexItem key={post.id} post={post} />;
  //       })}
  //     </ul>
  //   );
  // }

});

module.exports = PostIndex;
