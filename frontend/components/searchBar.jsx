var React = require('react');
var ApiUtil = require('../util/apiUtil');
var UserStore = require('../stores/userStore');



var SearchBar = React.createClass({

  getInitialState: function() {
    return {search: '', users: UserStore.all(), result: []}
  },

  componentDidMount: function () {
    ApiUtil.fetchAllUsers()
  },

  runSearch: function(event){
    event.preventDefault()
  },

  _onChange: function(event){
    console.log(this.state);
    event.preventDefault()
    this.setState({
      search: event.target.value,
      results: this.state.users.map(function(user){
        if (user.full_name.test(this.state.search)){
          return user
        }
      })
    })
  },


  render: function() {
    return (
      <div className="searchwrapper">
        <div className="searchpos">
          <form className="searchform" onSubmit={this.runSearch}>
            <button className="searchbutton" type="submit">
              <i className="searchbuttonimage"></i>
            </button>
            <input onChange={this._onChange} type="textarea" className="searchinput"></input>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = SearchBar;
