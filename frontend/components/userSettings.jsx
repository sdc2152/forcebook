var React = require('react');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var PostForm = require('./posts/postForm');
var PostIndex = require('./posts/postIndex');

var PhotoShow = require('./photos/photoShow');
var PhotoForm = require('./photos/photoForm');

var PostStore = require('../stores/postStore.js');

var About = require('./about');
var hashHistory = require('react-router').hashHistory;
var FriendsIndex = require('./friendships/friendsIndex');
var FriendStore = require('../stores/friendStore');
var FriendButton = require('./friendButton');



var UserSettings = React.createClass({
  getInitialState: function() {
    return {user: UserStore.displayedUser()}
  },

  _onChange: function() {
    this.setState({user: UserStore.displayedUser()})
  },

  componentDidMount: function() {
    ApiUtil.fetchSingleUser(this.props.params.user_id)
    this.friendListener = FriendStore.addListener(this._onChange);
    this.listener = UserStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchSingleUser(this.props.params.user_id);
    ApiUtil.fetchAllFriends(newProps.params.user_id);
    ApiUtil.fetchAllPosts(newProps.params.user_id);
    this.setState({user: UserStore.displayedUser()});
  },

  componentWillUnmount: function(){
    this.friendListener.remove()
    this.listener.remove()
  },

  redirectPostIndex: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.params.user_id + "/timeline")
  },

  redirectAbout: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.params.user_id + "/about")
  },

  redirectFriendsIndex: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.params.user_id + "/friends")
  },

  redirectPhotos: function (event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.params.user_id + "/photos")
  },


  render: function() {
    if (this.state.user !== undefined){
      return (
        <div id="userprofwrapper">
          <div id="usercontentwrappers" className="settingwrap">
            <div className="settingsuserinfo">
              <div className="profilepicmain">
                <PhotoShow clickAction={this.redirectPhotos} url={this.state.user.prof_url} type="profile_pic"/>
              </div>
              <div className="profilenamemain">
                <div className="settingusername">
                  {this.state.user.first_name} {this.state.user.last_name}
                </div>
              </div>
            </div>
            <div className="settingheader">
              <div className="settingheaderbanner">
                <FriendButton currentProfileId={this.props.params.user_id}/>
                <PhotoShow clickAction={this.redirectFriendsIndex} url={this.state.user.banner_url} type="banner_pic"/>
              </div>
              <div className="settingheaderbottom">
                <div className="settingbottomleft">
                </div>

                <div className="settingbottomright">
                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="timeline">
                        <span className="rightbotomimagewrap"></span>
                      </a>
                    </div>

                    <a title="timeline">
                      <span className="rightbotomimagewrap"></span>
                      <div className="clickable" onClick={this.redirectPostIndex}>Timeline</div>
                    </a>
                  </div>
                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="about" />
                    </div>

                    <a title="about">
                      <span className="rightbotomimagewrap"></span>
                      <div className="clickable" onClick={this.redirectAbout}>About</div>
                    </a>
                  </div>

                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="friends" />
                    </div>

                    <a title="friends">
                      <span className="rightbotomimagewrap"></span>
                      <div className="clickable" onClick={this.redirectFriendsIndex}>Friends</div>
                    </a>
                  </div>

                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="photos" />
                    </div>

                    <a title="photos">
                      <span className="rightbotomimagewrap"></span>
                      <div className="clickable" onClick={this.redirectPhotos}>Photos</div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {this.props.children}
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }

});

module.exports = UserSettings;
