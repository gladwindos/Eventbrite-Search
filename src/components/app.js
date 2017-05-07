import React, { Component } from 'react';
import  { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';
import EventList from '../containers/event_list';
import EventDetail from '../containers/event_detail'

class App extends Component {

  EventsView() {
    const event = this.props.activeEvent;

    if (event !== null) {
      return <EventDetail />
    }
    return <EventList />
  }

  render() {
    return (
      <div className="container2">
        <div id="search-view">
          <h1>Eventbrite Search</h1>
            <SearchBar />
        </div>
        <div id="eventsView">
          {this.EventsView()}
          </div>
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
