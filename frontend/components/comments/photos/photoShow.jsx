var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var PhotoForm = require('./photoForm');

var PhotoShow = React.createClass({
  getInitialState: function() {
    return {url: this.props.url}
  },

  render: function() {

    var divStyle = {
      backgroundImage: 'url(' + this.state.url + ')'
    }
    return (
      <div id="photoshow" className={this.props.type} style={divStyle}></div>
    );
  }

});

module.exports = PhotoShow;
