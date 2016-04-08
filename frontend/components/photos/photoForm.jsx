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
        if (result !== undefined){
          photo.url = result[0].url
          photo.public_id = result[0].public_id
          console.log(photo);
          ApiUtil.createNewPhoto(photo)
        }
      }
    );
  },

  render: function() {
    return (
      <div className="clickable photoadd" onClick={this.uploadPhoto.bind(this, event)}>
        <div className="uploadbutton">Upload</div>
      </div>
    );
  }

});

module.exports = PhotoForm;
