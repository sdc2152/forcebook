var React = require('react');
var Modal = require('react-modal');
var PhotoShow = require('./photoShow');

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

var PhotoEnlargeModal = React.createClass({

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


  display: function(){
      return <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}>
        <div className="postcommentwrapper">
          <div className="commentformwrapper">
            <a className="postbutton" onClick={this.closeModal}>X</a>
          </div>
          <div>
            <PhotoShow
              id={this.props.id}
              user={this.props.user}
              url={this.props.url}
              type="enlargephoto"/>
          </div>
        </div>
      </Modal>;
    },

  render: function() {
    return (
      <div onClick={this.openModal} className="inline">
        <PhotoShow
          id={this.props.id}
          user={this.props.user}
          url={this.props.url}
          type="medalbumphoto"/>
        {this.display()}
      </div>
    );
  }

});

module.exports = PhotoEnlargeModal;
