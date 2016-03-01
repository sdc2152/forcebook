var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var PhotoForm = require('./photoForm');

var PhotoShow = React.createClass({
  getInitialState: function() {
    return {photo: this.props.photo}
  },

  render: function() {
    var divStyle = {
      backgroundImage: 'url(' + this.state.photo.url + ')'
    }
    return (
      <div id="photoshow" className={this.state.photo.photo_type} style={divStyle}></div>
    );
  }

});

module.exports = PhotoShow;
