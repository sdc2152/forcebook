var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var SearchIndexItem = require('./searchIndexItem');

var SearchIndex = React.createClass({

  render: function() {
    return (
      <ul className="friendul">
        {this.props.results.map(function (user, idx) {
          return <SearchIndexItem key={idx} user={user}/>;
        }.bind(this))}
      </ul>
      )}
    })

module.exports = SearchIndex;
