var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var FriendStore = require('../../stores/friendStore');
var RequestIndexItem = require('./requestIndexItem');


var Requests = React.createClass({
  getInitialState: function() {
    return {requests: FriendStore.allRequests(), showRequests: false}
  },

  componentDidMount: function(){
    ApiUtil.fetchAllRequests(window.currentUserId)
    this.listener = FriendStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.listener.remove()
  },

  _onChange: function() {
    this.setState({requests: FriendStore.allRequests()})
  },

  _onClick: function () {
    this.setState({showRequests: !this.state.showRequests})
  },

  render: function() {
    var index = this.state.requests.map(function (request, idx) {
      if (request !== null && request.user !== null){
        return <RequestIndexItem key={idx} request={request.user}/>
      }
    }.bind(this))

    index = index.length < 1 ? [
      <div className="requestitemwrapper">
        <li>
          <div className="postwrapper">
            <div clasName="postcontent">
              <div onClick={this._onClick} className="postusername" id="requestname">
                You have no friend requests
              </div>
            </div>
          </div>
        </li>
      </div> ] : index

    return (
      <div>
        <div onClick={this._onClick} className="navbutton clickable">friend requests </div>
        {this.state.showRequests ? <ul className="requestindex">{index}</ul> : null}
      </div>
    );
  }

});

module.exports = Requests;
