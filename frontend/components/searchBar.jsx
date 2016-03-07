var React = require('react');
var ApiUtil = require('../util/apiUtil');
var UserStore = require('../stores/userStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');



var SearchBar = React.createClass({

  getInitialState: function() {
    return {search: ''}
  },

  componentDidUpdate: function () {
    if (this.state.partial) {
      ApiUtil.executeSearch(this.state.partial)
    }
  },

  runSearch: function(event){
    event.preventDefault()

  },

  render: function() {
    return (
      <div className="searchwrapper">
        <div className="searchpos">
          <form className="searchform" onSubmit={this.runSearch}>
            <button className="searchbutton" type="submit">
              <i className="searchbuttonimage"></i>
            </button>
            <input valueLink={"search"} type="textarea" className="searchinput"></input>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = SearchBar;
