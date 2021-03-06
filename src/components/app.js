import React, { Component } from 'react';
import  { connect } from 'react-redux';

import Header from '../containers/header';
import SearchBar from '../containers/search_bar';
import EventDetail from '../containers/event_detail'
import EventsView from '../containers/events_view'

class App extends Component {

  render() {
    return (
      <div className="container2">
        <Header />
        <EventsView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    activeEvent: state.activeEvent,
  };
}

export default connect(mapStateToProps)(App);
