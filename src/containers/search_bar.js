import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchEvents } from '../actions/index';
import { selectEvent } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      events: [],
      activeEvent: {}
    };

    // this gives onInputChange to ability to use this (i.e SearchBar instance)
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.selectEvent(null)
    this.props.fetchEvents(this.state.term);
  }

  render() {
    //BELOW LINE IS FOR TESTING
    // this.props.fetchEvents('London');

    return (
      <div id="search-bar">
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for events"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary search-btn">Search</button>
        </span>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    activeEvent: state.activeEvent
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, selectEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
