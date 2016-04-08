var React = require('react');
var PhotoForm = require('./photoForm');
var PhotoShow = require('./photoShow');
var PhotoStore = require('../../stores/photoStore');
var ApiUtil = require('../../util/apiUtil');

var PhotoIndexTop = React.createClass({
  getInitialState: function() {
    return {photos: PhotoStore.topNine()}
  },
  componentDidMount: function() {
    ApiUtil.fetchUserPhotos(this.props.currentProfileId)
    this.listener = PhotoStore.addListener(this._onChange)
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchUserPhotos(newProps.currentProfileId)
  },

  componentWillUnmount: function() {
    this.listener.remove()
  },

  _onChange: function () {
    this.setState({photos: PhotoStore.topNine()})
  },

  render: function() {
    return (
      <div>
        <ul>
          {this.state.photos.map(function (photo, idx) {
          {var thing = photo.albumphoto !== undefined ? <PhotoShow
              key={idx}
              id={photo.albumphoto.id}
              url={photo.albumphoto.url}
              user={photo.albumphoto.user_id}
              type="albumphoto" /> : null }
              return thing
          }.bind(this))}
        </ul>
      </div>
    );
  }

});

module.exports = PhotoIndexTop;
