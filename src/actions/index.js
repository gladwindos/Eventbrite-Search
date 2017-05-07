import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
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

export function selectEvent(event) {
  return {
    type: EVENT_SELECTED,
    payload: event,
  };
}
