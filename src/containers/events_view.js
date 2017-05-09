import React, { Component } from 'react';
import  { connect } from 'react-redux';

import Header from '../containers/header';
import SearchBar from '../containers/search_bar';
import EventList from '../containers/event_list';
import EventDetail from '../containers/event_detail'

class EventsView extends Component {

  renderEventsView() {
    const event = this.props.activeEvent;

    if (event !== null) {
      return <EventDetail />
    }
    return <EventList />
  }

  render() {
    return (
        <div id="eventsView">
          {this.renderEventsView()}
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

export default connect(mapStateToProps)(EventsView);
