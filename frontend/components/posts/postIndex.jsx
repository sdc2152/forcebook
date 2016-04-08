var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var PostStore = require('../../stores/postStore.js');
var PostIndexItem = require('./postIndexItem');
var PostForm = require('./postForm');

var PhotoIndexTop = require('../photos/photoIndexTop');
var FriendsIndexTop = require('../friendships/friendsIndexTop');

var hashHistory = require('react-router').hashHistory;

var PostIndex = React.createClass({

  getInitialState: function(){
    return {posts: PostStore.all()}
  },

  componentDidMount: function () {
    this.listener = PostStore.addListener(this._onChange);
    PostStore.resetPosts()
    ApiUtil.fetchAllPosts(this.props.params.user_id);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({posts: PostStore.all()})
  },

  redirectPhotos: function (event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.params.user_id + "/photos")
  },

  redirectFriends: function (event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.params.user_id + "/friends")
  },



  render: function() {
    return (
      <div className="userinfocont">
        <div className="leftcolpostindex">
          <ul>
            <li className="postindexphotowrapper">
              <div onClick={this.redirectPhotos} className="photoindexlabel">Photos</div>
              <PhotoIndexTop currentProfileId={this.props.params.user_id}/>
            </li>
            <li className="postindexphotowrapper">
              <div onClick={this.redirectFriends} className="photoindexlabel">Friends</div>
              <FriendsIndexTop currentProfileId={this.props.params.user_id}/>
            </li>
            <li>

            </li>
          </ul>
        </div>
        <div className="postindexrightmain">
          <div id="content">
            <PostForm targetId={this.props.params.user_id} />
            <div className="postindexwrapper">
              <ul>
                {this.state.posts.map(function (post, idx) {
                  return <PostIndexItem key={idx} post={post} user={post.user} currentPage={this.props.params.user_id}/>;
                }.bind(this))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PostIndex;
