var React = require('react');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var TextArea = require('react-textarea-autosize');

var About = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function(){
    var userAbout = UserStore.displayedUser()
    return {
      user: userAbout,
      edit: false,
      lives: userAbout.lives,
      education: userAbout.education,
      work: userAbout.works,
      about: userAbout.about
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this._onChange);
    ApiUtil.fetchSingleUser(this.props.params.user_id);
    },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    var userAbout = UserStore.displayedUser()
    this.setState({user: userAbout,
      lives: userAbout.lives,
      education: userAbout.education,
      work: userAbout.work,
      about: userAbout.about
    })
  },

  updateInfo: function(event) {
    event.preventDefault()
    ApiUtil.updateUser(window.currentUserId, this.state)
    this.setState({
      edit: false
    })
  },

  displayEdit: function (event) {
    event.preventDefault()
    this.setState({edit: true})
  },

  render: function() {
    if (this.state.user !== undefined && !this.state.edit) {
      return (
        <div id="aboutconwrap">
          <div id="rightcol">
            { this.state.user.id === window.currentUserId ? <a className="clicktext" onClick={this.displayEdit}>Edit</a> : null}
          </div>
          <div id="aboutfieldcon">
            <form id="aboutpostform" className='postform' onSubmit={this.updateInfo}>
              <div className="midpostform">

                <div className="postarea">
                  Lives:
                  <div className="inputwrapper">
                    {this.state.user.lives}
                  </div>
                </div>

                <div className="postarea">
                  Education:
                  <div className="inputwrapper">
                    {this.state.user.education}
                  </div>
                </div>

                <div className="postarea">
                  Works:
                  <div className="inputwrapper">
                    {this.state.user.work}
                  </div>
                </div>

                <div className="postarea">
                  About:
                  <div className="inputwrapper">
                    {this.state.user.about}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (this.state.user !== undefined && this.state.edit) {
      return (
        <div id="aboutconwrap">
          <div id="rightcol">
          </div>
          <div id="aboutfieldcon">
            <form id="aboutpostform" className='postform' onSubmit={this.updateInfo}>
              <div className="midpostform">

                <div className="postarea">
                  Lives:
                  <div className="inputwrapper">
                    <TextArea
                      valueLink={this.linkState("lives")}
                      />
                  </div>
                </div>

                <div className="postarea">
                  Education:
                  <div className="inputwrapper">
                    <TextArea
                      valueLink={this.linkState("education")}
                      />
                  </div>
                </div>

                <div className="postarea">
                  Works:
                  <div className="inputwrapper">
                    <TextArea
                      valueLink={this.linkState("work")}
                      />
                  </div>
                </div>

                <div className="postarea">
                  About:
                  <div className="inputwrapper">
                    <TextArea
                      valueLink={this.linkState("about")}
                      />
                  </div>
                </div>
              </div>

              <div className="bottompostform">
                <div className="bpostright">
                  <div className="postactionwrapper">
                    <button className="postbutton">Update</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    }
    else {
      return (<div></div>);
    }
  }
});

module.exports = About;
