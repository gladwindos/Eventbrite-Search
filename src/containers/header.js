import React, { Component } from 'react';
import  { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';
// import EventList from '../containers/event_list';
// import EventDetail from '../containers/event_detail'

export default class Header extends Component {

  render() {
    return (
      <div id="search-view">
        <h1>Eventbrite Search</h1>
        <SearchBar />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     events: state.events,
//     activeEvent: state.activeEvent,
//   };
// }

// export default connect(mapStateToProps)(Header);
