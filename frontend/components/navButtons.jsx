var React = require('react');
var hashHistory = require('react-router').hashHistory;
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var RequestIndex = require('./requests/requestIndex');


var NavButtons = React.createClass({
  redirectHome: function(event) {
    event.preventDefault()

    hashHistory.push('')
  },

  redirectProfile: function(event) {
    event.preventDefault()
    hashHistory.push('users/' + window.currentUserId)
  },

  logout: function(event){
    event.preventDefault()
    ApiUtil.logOut()
  },

  render: function() {
    return (
      <div className="navbuttonwrapper">
        <div className="userinfowrapper">

          <div className="adjustprofilebutton">
            <button onClick={this.redirectProfile} className="navbutton clickable">to profile</button>
          </div>

          <div className="adjustprofilebutton">
            <button onClick={this.redirectHome} className="navbutton clickable">to home</button>
          </div>
        </div>


        <div className="notificationswrapper">
          <div className="adjustprofilebutton" id="friendreq">
            <RequestIndex/>
          </div>

          <div className="adjustprofilebutton">
            <ul className="navbutton">

            </ul>
          </div>

          <div className="adjustprofilebutton">
            <ul className="navbutton">

            </ul>
          </div>
        </div>

        <div className="adjustprofilebutton">
          <button onClick={this.logout} className="navbutton clickable">logout</button>
        </div>

      </div>
    );
  }

});

module.exports = NavButtons;
