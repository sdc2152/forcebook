var React = require('react');
var PhotoForm = require('./photoForm');
var PhotoShow = require('./photoShow');
var PhotoStore = require('../../stores/photoStore');
var ApiUtil = require('../../util/apiUtil');
var PhotoEnlargeModal = require('./photoEnlargeModal');


var PhotoIndex = React.createClass({
  getInitialState: function() {
    return {photos: PhotoStore.all()}
  },
  componentDidMount: function() {
    ApiUtil.fetchUserPhotos(this.props.params.user_id)
    this.listener = PhotoStore.addListener(this._onChange)
  },

  componentWillUnmount: function() {
    this.listener.remove()
  },

  _onChange: function () {
    this.setState({photos: PhotoStore.all()})
  },


  render: function() {
    return (
      <div className="photowrapper">
        <div className="photoindexheading">
          {window.currentUserId == this.props.params.user_id ? <PhotoForm photoType="albumphoto"/> : null}
        </div>
        <ul>
          {this.state.photos.map(function (photo, idx) {
            {var thing = photo.albumphoto !== undefined ? <PhotoEnlargeModal
              id={photo.albumphoto.id}
              user={photo.albumphoto.user_id}
              url={photo.albumphoto.url}
              key={idx}
              type="medalbumphoto"/>: null }
            return thing
          }.bind(this))}
        </ul>
      </div>
    );
  }

});

module.exports = PhotoIndex;
