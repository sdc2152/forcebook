var React = require('react');
var hashHistory = require('react-router').hashHistory;
var PhotoShow = require('./photos/photoShow');


var ProfileLeft = React.createClass({

  onClick: function () {
    hashHistory.push('users/' +  window.currentUserId)
  },
  render: function() {
    return (
      <div className="leftnav">
        <div className="proflistwrapper">
          <ul className="proflist">
            <li>
              <div className="proflistitemcontentwrapper">

                <div className="leftcontentwrapper">
                  <PhotoShow url={this.props.user.prof_url} type="profile_pic" />
                </div>

                <div>
                  <a title={this.props.user.full_name}>
                    <span className="leftnavimagewrap"></span>
                    <div onClick={this.onClick}>{this.props.user.full_name}</div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="proflistitemcontentwrapper">
                <div className="leftcontentwrapper">
                  <a className="edit" />
                </div>

                <a title="editprof">
                  <span className="leftnavimagewrap"></span>
                  <div onClick={this.onClick}>edit profile</div>
                </a>
              </div>
            </li>

          </ul>

          <div className="favlistwrapper">
            <h4>
              <span className="leftnavesectionheader">FAVORITES</span>
            </h4>
              <ul className="favlist">

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="newsfeed" />
                    </div>

                    <a title="newsfeed">
                      <span className="leftnavimagewrap"></span>
                      <div>NewsFeed</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="messages" />
                    </div>
                    <a title="messages">
                      <span className="leftnavimagewrap"></span>
                      <div>Messages</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="events" />
                    </div>
                    <a title="events">
                      <span className="leftnavimagewrap"></span>
                      <div>Events</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="saved" />
                    </div>
                    <a title="saved">
                      <span className="leftnavimagewrap"></span>
                      <div>Saved</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="salegroups" />
                    </div>
                    <a title="sale">
                      <span className="leftnavimagewrap"></span>
                      <div>Sale Groups</div>
                    </a>
                  </div>
                </li>
              </ul>
          </div>
          <div className="pagelistwrapper">
              <h4>
                <span className="leftnavesectionheader">PAGES</span>
              </h4>
              <ul className="pagelist">

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="likepages" />
                    </div>
                    <a title="likepages">
                      <span className="leftnavimagewrap"></span>
                      <div>Like Pages</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="pagesfeed" />
                    </div>
                    <a title="pagefeed">
                      <span className="leftnavimagewrap"></span>
                      <div>Pages Feed</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="createpage" />
                    </div>
                    <a title="createpage">
                      <span className="leftnavimagewrap"></span>
                      <div>Create Page</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="createad" />
                    </div>
                    <a title="createad">
                      <span className="leftnavimagewrap"></span>
                      <div>Create Ad</div>
                    </a>
                  </div>
                </li>

              </ul>
          </div>
          <div className="grouplistwrapper">
              <h4>
                <span className="leftnavesectionheader">GROUPS</span>
              </h4>
              <ul className="grouplist">
                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="creategroup" />
                    </div>
                    <a title="creategroup">
                      <span className="leftnavimagewrap"></span>
                      <div>Create Group</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="newgroups" />
                    </div>
                    <a title="newgroup">
                      <span className="leftnavimagewrap"></span>
                      <div>New Groups</div>
                    </a>
                  </div>
                </li>

              </ul>
          </div>
          <div className="firendlistwrapper">
              <h4>
                <span className="leftnavesectionheader">FRIENDS</span>
              </h4>
              <ul className="friendlist">
                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="family" />
                    </div>
                    <a title="closelist">
                      <span className="leftnavimagewrap"></span>
                      <div>Family</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="closefriends" />
                    </div>
                    <a title="closelist">
                      <span className="leftnavimagewrap"></span>
                      <div>Close Friends</div>
                    </a>
                  </div>
                </li>

              </ul>
          </div>
          <div className="applistwrapper">
              <h4>
                <span className="leftnavesectionheader">APPS</span>
              </h4>
              <ul className="applist">
                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="pokes" />
                    </div>
                    <a title="pokes">
                      <span className="leftnavimagewrap"></span>
                      <div>Pokes</div>
                    </a>
                  </div>
                </li>


                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="photos" />
                    </div>
                    <a title="photos">
                      <span className="leftnavimagewrap"></span>
                      <div>Photos</div>
                    </a>
                  </div>
                </li>


                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="gamesfeed" />
                    </div>
                    <a title="gamefeed">
                      <span className="leftnavimagewrap"></span>
                      <div>Games Feed</div>
                    </a>
                  </div>
                </li>


              </ul>
          </div>
          <div className="interestlistwrapper">
              <h4>
                <span className="leftnavesectionheader">INTERESTS</span>
              </h4>
              <ul className="insterestlist">
                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="pagesandpublic" />

                    </div>
                    <a title="pagepublic">
                      <span className="leftnavimagewrap"></span>
                      <div>Pages and Public ...</div>
                    </a>
                  </div>
                </li>

              </ul>
          </div>
          <div className="eventlistwrapper">
              <h4>
                <span className="leftnavesectionheader">EVENTS</span>
              </h4>
            <ul className="eventlist">

              <li>
                <div className="proflistitemcontentwrapper">
                  <div className="leftcontentwrapper">
                    <a className="createevent" />
                  </div>
                  <a title="createevent">
                    <span className="leftnavimagewrap"></span>
                    <div>Create Event</div>
                  </a>
              </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ProfileLeft;
