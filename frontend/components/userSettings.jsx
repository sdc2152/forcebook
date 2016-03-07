var React = require('react');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var PostForm = require('./posts/postForm');
var PostIndex = require('./posts/postIndex');
var PhotoShow = require('./photos/photoShow');
var PhotoForm = require('./photos/photoForm');
var About = require('./about');
var hashHistory = require('react-router').hashHistory;
var FriendsIndex = require('./friendships/friendsIndex');
var FriendStore = require('../stores/friendStore');
var FriendButton = require('./friendButton');



var UserSettings = React.createClass({
  getInitialState: function() {
    return {user: UserStore.find(this.props.params.user_id),
      areFriends: FriendStore.areFriends(this.props.params.user_id)}
  },

  _onChange: function() {
    this.setState({areFriends: FriendStore.areFriends(this.props.params.user_id)})
  },

  componentDidMount: function() {
    this.friendListener = FriendStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchAllFriends(window.currentUserId);
    this.setState({user: UserStore.find(newProps.params.user_id),
    areFriends: FriendStore.areFriends(this.props.params.user_id) });
  },

  componentWillUnmount: function(){
    this.friendListener.remove()
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


  render: function() {
    if (this.state.user !== undefined){
      return (
        <div id="userprofwrapper">
          <div id="usercontentwrappers" className="settingwrap">
            <div className="settingsuserinfo">
              <div className="profilepicmain">
                <PhotoShow url={this.state.user.prof_url} type="profile_pic"/>
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
                <PhotoShow url={this.state.user.banner_url} type="banner_pic"/>
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
                      <div onClick={this.redirectPostIndex}>Timeline</div>
                    </a>
                  </div>
                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="about" />
                    </div>

                    <a title="about">
                      <span className="rightbotomimagewrap"></span>
                      <div onClick={this.redirectAbout}>About</div>
                    </a>
                  </div>

                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="friends" />
                    </div>

                    <a title="friends">
                      <span className="rightbotomimagewrap"></span>
                      <div onClick={this.redirectFriendsIndex}>Friends</div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div id="leftmain">
            <div className="photowrapper">

            </div>
            <div className="friendswrapper">

            </div>
          </div>
          {this.props.children}
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
