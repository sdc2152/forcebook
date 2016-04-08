var React = require('react');
var ApiUtil = require('../util/apiUtil');
var SearchStore = require('../stores/searchStore');
var SearchIndex = require('./search/searchIndex');
var LinkedStateMixin = require('react-addons-linked-state-mixin');



var SearchBar = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      search: '',
      show: false,
      results: SearchStore.searchResults()
    }
  },

  runSearch: function (event) {
    event.preventDefault()
    if (this.state.search !== '') {
      this.setState({show: true})
      var terms = '%' + this.state.search + '%'
      ApiUtil.executeSearch(terms)
    }
    else {
      this.setState({show: false})
    }
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({search: '', show: false})
  },


  componentDidMount: function () {
    this.listener = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({results: SearchStore.searchResults()})
  },


  render: function() {
    return (
      <div className="searchwrapper">
        <div className="searchpos">
          <form className="searchform" onSubmit={this.redirectSearch}>
            <button className="searchbutton" type="submit">
              <i className="searchbuttonimage"></i>
            </button>
            <input onKeyUp={this.runSearch} valueLink={this.linkState("search")} type="textarea" className="searchinput"></input>
          </form>
        </div>
        {this.state.show ? <SearchIndex results={this.state.results}/> : null}
      </div>
    );
  }

});

module.exports = SearchBar;
