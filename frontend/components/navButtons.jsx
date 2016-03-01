var React = require('react');
var hashHistory = require('react-router').hashHistory;


var NavButtons = React.createClass({
  redirectHome: function(event) {
    event.preventDefault()

    hashHistory.push('')
  },

  redirectProfile: function(event) {
    event.preventDefault()

    hashHistory.push('users/' + window.currentUserId)
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
          <div className="adjustprofilebutton">
            <ul className="navbutton clickable">friend requests

            </ul>
          </div>

          <div className="adjustprofilebutton">
            <ul className="navbutton clickable">messsages

            </ul>
          </div>

          <div className="adjustprofilebutton">
            <ul className="navbutton clickable">notifications

            </ul>
          </div>
        </div>

        <div className="settingswrapper">
          <div className="adjustprofilebutton">
            <ul className="navbutton clickable">privacy shortcuts

            </ul>
          </div>

          <div className="adjustprofilebutton">
            <ul className="navbutton clickable">settings

            </ul>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = NavButtons;
