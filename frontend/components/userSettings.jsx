var React = require('react');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var PostForm = require('./posts/postForm');
var PostIndex = require('./posts/postIndex');
var PhotoShow = require('./photos/photoShow');
var PhotoForm = require('./photos/photoForm');



var UserSettings = React.createClass({
  getInitialState: function() {
    return {user: UserStore.find(window.currentUserId)}
  },

  _onChange: function() {
    this.setState({user: UserStore.find(window.currentUserId)})
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this._onChange);
    ApiUtil.fetchAllUsers();
  },

  componentWillUnmount: function(){
    this.listener.remove()
  },

  render: function() {

    if (this.state.user !== undefined){
      return (
        <div id="userprofwrapper">
          <div id="usercontentwrappers" className="settingwrap">
            <div className="profilepicmain">
              <PhotoShow photo={this.state.user.photos.profile_pic}/>
            </div>
            <div className="settingheader">
              <div className="settingheaderbanner">
                <PhotoShow photo={this.state.user.photos.banner_pic}/>
              </div>
              <div className="settingheaderbottom">
                <div className="settingbottomleft">
                </div>

                <div className="settingbottomright">
                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="timeline" />
                    </div>

                    <a title="timeline">
                      <span className="rightbotomimagewrap"></span>
                      <div onClick={this.goTimeline}>Timeline</div>
                    </a>
                  </div>
                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="about" />
                    </div>

                    <a title="about">
                      <span className="rightbotomimagewrap"></span>
                      <div onClick={this.onClick}>About</div>
                    </a>
                  </div>

                  <div className="settingnavbottomwrapper">
                    <div className="rightbottomcontentwrapper">
                      <a className="friends" />
                    </div>

                    <a title="friends">
                      <span className="rightbotomimagewrap"></span>
                      <div onClick={this.onClick}>Friends</div>
                    </a>
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
          </div>

            <div id="rightmain">
              <div id="rightcol">
              </div>
              <div id="content">
                <PostIndex user={this.state.user}/>
              </div>
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

// <PhotoShow photoType="banner_pic" photo={this.state.user.photos.banner_pic}/>
//
//
//
// <PhotoShow photoType="profile_pic" photo={this.state.user.photos.profile_pic}/>
