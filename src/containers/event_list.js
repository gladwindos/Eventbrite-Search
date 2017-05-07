import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectEvent } from '../actions/index';

class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.renderLogo = this.renderLogo.bind(this);
  }

  renderLogo(logo) {
    if (logo !== null) {
      return logo.original.url
    } else {
      // placeholder image
      return 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif'
    }
  }

  renderEvents(event) {
    return (
      <div key={event.id} className="event" onClick={() => this.props.selectEvent(event)}>
        <img src={this.renderLogo(event.logo)}/>
        <div className="event-detail">
          <h4>{event.name.text}</h4>
          <p>{event.start.local}</p>
          <p>Venue id: {event.venue_id}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="event-list">
        <div className="container2">
          {this.props.events.map(this.renderEvents)}
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent: selectEvent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
