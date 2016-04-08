var React = require('react');
var Modal = require('react-modal');
var ApiUtil = require('../util/apiUtil');


const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.7)',
    zIndex            : 10
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    background            : "#fff",
    transform             : 'translate(-50%, -50%)',
    padding               : 10,
    border                : 0
  }
};

var ShareModal = React.createClass({

  getInitialState: function (){
    return({
      modalIsOpen: false
    })
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  sharePost: function(event) {
    event.preventDefault();
    var body = this.props.post.body
    var currentUser = this.props.current
    ApiUtil.sharePost({body: body, author_id: currentUser, target_id: currentUser}, currentUser)
    this.closeModal()
  },

  display: function(){
      return <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}>
        <div className="postcommentwrapper">
          <div>
            would you like to share this post?
          </div>
          <div className="commentformwrapper">
            <a className="postbutton" onClick={this.sharePost}>yes</a>
            <a className="postbutton" onClick={this.closeModal}>no</a>
          </div>
        </div>
      </Modal>;
    },

  render: function() {
    return (
      <div className="inline" >
        <a className="clickable" onClick={this.openModal}>Share</a>
        {this.display()}
      </div>
    );
  }

});

module.exports = ShareModal;
