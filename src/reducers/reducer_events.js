import { FETCH_EVENTS } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_EVENTS:
    // action.payload.data is the object from the payload
    // data.events is the events array thats in the data object
      return action.payload.data.events;
  }

  return state;
}
