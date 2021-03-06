import { EVENT_SELECTED } from '../actions/index';

export default function(state=null, action) {
  switch (action.type) {
    case EVENT_SELECTED:
      return action.payload
  }
  return state;
}
