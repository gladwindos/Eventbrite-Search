import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_VENUE = 'FETCH_VENUE';
export const EVENT_SELECTED = 'EVENT_SELECTED';

const API_URL = 'https://www.eventbriteapi.com/v3';
const TOKEN = 'KGUINV332ZUTMSA56IML';

export function fetchEvents(searchTerm) {
  const url = `${API_URL}/events/search/?token=${TOKEN}`

  const request = axios.get(url, {
    params: {
      q: searchTerm
    }
  });
  
  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

export function fetchVenue(venue_id) {
  const url = `${API_URL}/venues/${venue_id}`

  const request = axios.get(url);

  console.log(request.data);

  return {
    type: FETCH_VENUE,
    payload: request
  };
}

export function selectEvent(event) {
  return {
    type: EVENT_SELECTED,
    payload: event,
  };
}
