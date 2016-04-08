var React = require('react');
var FriendStore = require('../../stores/friendStore');
var PhotoShow = require('../photos/photoShow');
var hashHistory = require('react-router').hashHistory;
var ApiUtil = require('../../util/apiUtil');



var RequestIndexItem = React.createClass({

  _onClick: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.request.id + "/timeline")
  },

  acceptRequest: function(event) {
    event.preventDefault()
    ApiUtil.approveFriendRequest(this.props.request.id);
  },

  denyRequest: function(event) {
    event.preventDefault()
    ApiUtil.removeFriend(this.props.request.id);
  },

  render: function() {
    return (
      <div className="requestitemwrapper">
        <li>
          <div className="postwrapper">

            <div clasName="postcontent">

              <div className="posterinfo">
                <div className="profilepicwrapper">
                  <PhotoShow url={this.props.request.prof_url} type="profile_pic" />
                </div>

                <div onClick={this._onClick} className="postusername" id="requestname">
                  {this.props.request.first_name} {this.props.request.last_name}
                </div>
                <div className="requestbuttonwrapper">
                  <button onClick={this.acceptRequest} className="requestbutton">accept</button>
                </div>
                <div className="requestbuttonwrapper">
                  <button onClick={this.denyRequest} className="requestbutton">deny</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }

});

module.exports = RequestIndexItem;
