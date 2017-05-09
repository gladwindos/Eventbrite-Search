import { FETCH_VENUE } from '../actions/index';

export default function(state = null, action) {

  switch (action.type) {
    case FETCH_VENUE:
    // action.payload.data is the object from the payload
    // data.events is the events array thats in the data object
      return action.payload.data.venue;
  }

  return state;
}
