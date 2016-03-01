var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var PhotoConstants = require('../constants/photoConstants.js');
var PhotoStore = new Store(AppDispatcher);

var _photos = [];
var _photo = [];


PhotoStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case PhotoConstants.PHOTO_RECEIVED:
      resetPhoto(payload.photo)
      break;
    case PhotoConstants.PHOTOS_RECEIVED:
      resetPhotos(payload.photos)
      break;
    case PhotoConstants.PHOTO_CREATED:
      addPhoto(payload.photo)
      break;
    case PhotoConstants.PHOTO_DELETED:
      removePhoto(payload.photo)
      break;
    case PhotoConstants.PHOTO_UPDATED:
      resetPhotos(payload.photo)
      break;
  }
};

PhotoStore.all = function (){
  return _photos
};

removePhoto = function(photo) {
  var photos = [];
  _photos.forEach(function(el, idx){
    if (el.id !== photo.id){
      photos.push(el)
    }
  })
  resetPhotos(photos)
};

addPhoto = function(photo) {
  _photos = [photo].concat(_photos)
  PhotoStore.__emitChange()
};

resetPhotos = function (photos) {
  _photos = photos
  PhotoStore.__emitChange()
};

resetPhoto = function (photo) {
  _photo = photo;
  PhotoStore.__emitChange()
};

PhotoStore.find = function (photoId) {
  var foundPhoto;
  _photos.forEach(function (photo) {
    if (photo.id === photoId){
      foundPhoto = photo
    }
  })
  return foundPhoto
}


module.exports = PhotoStore;
