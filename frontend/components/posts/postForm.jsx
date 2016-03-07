var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.js');
var PhotoShow = require('../photos/photoShow');
var TextArea = require('react-textarea-autosize');
var UserStore = require('../../stores/userStore');


var PostForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      author: UserStore.find(window.currentUserId),
      body: '',
      target_id: (this.props.params === undefined ? window.currentUserId : this.props.params.user_id)
    }
  },

  createPost: function (event) {
    event.preventDefault();

    ApiUtil.createNewPost(this.state)
    this.setState({body: ''});
  },

  keyDown: function(event){
    if (event.keyCode === 16){
      this.shiftHeld = true
    }
    if (!this.shiftHeld && event.keyCode === 13){
      this.createPost(event)
    }
  },

  keyUp: function(event) {
    if (event.keyCode === 16){
      this.shiftHeld = false
    }
  },

  render: function() {
    return (
      <div className="shadow">
        <form id="postformid" className='postform' onSubmit={this.createPost}>

          <div className="posttabs">
          </div>

          <div className="midpostform">
            <div className="profilepicwrapperform">
              <PhotoShow url={this.state.author.prof_url} type="profile_pic"/>
            </div>

            <div className="postarea">
              <div className="inputwrapper">
                <TextArea
                  onKeyDown={this.keyDown}
                  onKeyUp={this.keyUp}
                  className='postbody'
                  valueLink={this.linkState("body")}
                  placeholder="What's on your mind?"
                  />
              </div>
            </div>
          </div>

          <div className="bottompostform">
            <div className="bpostright">
              <div className="postactionwrapper">
                <button className="postbutton">Post</button>
              </div>
            </div>
          </div>

      </form>
    </div>
    );
  }

});

module.exports = PostForm;
