var React = require('react');
var FriendStore = require('../../stores/friendStore');
var ApiUtil = require('../../util/apiUtil');
var PhotoShow = require('../photos/photoShow');
var hashHistory = require('react-router').hashHistory;
var UserStore = require('../../stores/userStore');

var FriendIndexItem = React.createClass({
  getInitialState: function(){
    return {friend: this.props.friend}
  },

  redirectToProfile: function(event) {
    event.preventDefault()
    hashHistory.push('users/' + this.props.friend.id)
  },

  render: function() {
    return (
      <div className="outerwrapperfriend">
        <li className="friendli">
          <div className="indfriendwrapper">
            <div className="friendwrapper">

              <div clasName="friendcontent">

                <div className="frienderinfo">
                  <div className="friends profilepicwrapper">
                    <PhotoShow url={this.state.friend.prof_url} type="profile_pic"/>
                  </div>

                  <div className="friendusername" onClick={this.redirectToProfile}>
                    {this.state.friend.name}
                  </div>
                </div>

                <div clasName="friendbdy">
                  <div className="friendcontent">
                  </div>
                </div>

              </div>

            </div>
          </div>
        </li>
      </div>
    );
  },


});

module.exports = FriendIndexItem;
