var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var PhotoStore = require('../../stores/photoStore.js');


var PhotoForm = React.createClass({

  uploadPhoto: function (event) {
    event.preventDefault();
    photo = {user_id: window.currentUserId, photo_type: this.props.photoType, url: '', public_id: ''}

    cloudinary.openUploadWidget({
      upload_preset: window.UPLOAD_PRESET,
      },

      function(error, result) {
        photo.url = result[0].url
        photo.public_id = result[0].public_id

        ApiUtil.createNewPhoto(photo)
      }
    );
  },

  render: function() {
    return (
      <div>
        <button onClick={this.uploadPhoto.bind(this, event)} />
      </div>
    );
  }

});

module.exports = PhotoForm;
