var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var PhotoForm = require('./photoForm');
var DeletePhotoModal = require('../deletePhotoModal');

var PhotoShow = React.createClass({

  render: function() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.url + ')'
    }
    return (
      <div onClick={this.props.clickAction} id="photoshow" className={this.props.type} style={divStyle}>
        {this.props.user === window.currentUserId ? <DeletePhotoModal id={this.props.id}/> : null}
      </div>
    );
  }

});

module.exports = PhotoShow;
