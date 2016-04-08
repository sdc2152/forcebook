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

var DeletePhotoModal = React.createClass({

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

  deletePhoto: function(event){
    event.preventDefault()
    ApiUtil.deletePhoto(this.props.id)
    this.closeModal()
  },

  display: function(){
      return <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}>
        <div className="postcommentwrapper">
          <div>
            would you like to delete this photo?
          </div>
          <div className="commentformwrapper">
            <a className="postbutton" onClick={this.deletePhoto}>yes</a>
            <a className="postbutton" onClick={this.closeModal}>no</a>
          </div>
        </div>
      </Modal>;
    },

  render: function() {
    return (
      <div>
        <div className="delete" onClick={this.openModal}></div>
        {this.display()}
      </div>
    );
  }

});

module.exports = DeletePhotoModal;
