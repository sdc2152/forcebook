var React = require('react');
var SearchBar = require('./searchBar');
var NavButtons = require('./navButtons');

var Header = React.createClass({

  redirectHome: function(event) {
    event.preventDefault()

    hashHistory.push('')
  },

  render: function() {
    return (
      <div id="navwrapper" className="home">
        <div className="navleft">
          <div id="navbar" className="home">

            <div className="leftnavwrapper">
              <div className="flogowrapper">
                <a className="flogo">
                  <span onClick={this.redirectHome} className="flogoimage"></span>
                </a>
              </div>

              <SearchBar/>

            </div>

            <NavButtons/>

          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
