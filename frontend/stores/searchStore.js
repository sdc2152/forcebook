var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var SearchConstants = require('../constants/searchConstants.js');


var SearchStore = new Store(AppDispatcher);
var _searchResults = [];

SearchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SearchConstants.RESULTS_RECEIVED:
    this._resetSearch(payload.results);
    break;
  }
};
_resetSearch = function(results) {
  _searchResults = results;
  this.__emitChange();
};

SearchStore.all = function() {
  return _searchResults.slice();
};




module.exports = SearchStore;
