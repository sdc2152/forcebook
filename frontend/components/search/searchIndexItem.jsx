var React = require('react');
var PhotoShow = require('../photos/photoShow');
var hashHistory = require('react-router').hashHistory;
var ApiUtil = require('../../util/apiUtil');


var SearchIndexItem = React.createClass({

  _onClick: function(event) {
    event.preventDefault()
    hashHistory.push("users/" + this.props.user.id + "/timeline")
  },

  render: function() {
    return (
      <div className="requestitemwrapper">
        <li>
          <div className="postwrapper">

            <div clasName="postcontent">

              <div className="posterinfo">
                <div className="profilepicwrapper">
                  <PhotoShow url={this.props.user.prof_url} type="profile_pic" />
                </div>

                <div onClick={this._onClick} className="postusername" id="requestname">
                  {this.props.user.first_name} {this.props.user.last_name}
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }

});

module.exports = SearchIndexItem;
