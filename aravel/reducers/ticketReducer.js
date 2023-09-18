import {
    SEARCH_FLIGHT,
    FLIGHT_BOOK,
    GET_BOOKINGS,
    BOOK_FLIGHT,
    CLEAR_FLIGHT_ERROR,
    CANCEL_BOOKING,
    CLEAR_BOOKING,
    CLEAR_FLIGHT,
    STORE_USER_DETAILS,
    FLIGHT_ERROR
} from '../actions/types'

const DEFAULT_STATE = {
    flights: [],
    flight: {},
    booking: {},
    bookings: [],
    userDetails: {},
    cancelBooking: false,
    errorMessage: "",
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case SEARCH_FLIGHT:
        return {
          ...state,
          flights: action.payload,
        };
      case BOOK_FLIGHT:
        return {
          ...state,
          flight: action.payload,
        };
      case FLIGHT_BOOK:
        return {
          ...state,
          flights: [],
          booking: action.payload,
        };
      case GET_BOOKINGS:
        return {
          ...state,
          bookings: action.payload,
        };
      case CLEAR_BOOKING:
        return {
          ...state,
          cancelBooking: false,
          booking: action.payload,
        };
      case CLEAR_FLIGHT_ERROR:
        return {
          ...state,
          errorMessage: action.payload,
        };
      case CANCEL_BOOKING:
        return {
          ...state,
          cancelBooking: true,
        };
      case STORE_USER_DETAILS:
        return {
          ...state,
          userDetails: action.payload,
        };
      case CLEAR_FLIGHT:
        return {
          ...state,
          flights: [],
          flightId: {},
          booking: {},
          userDetails: {},
        };
      case FLIGHT_ERROR:
        return { ...state, errorMessage: action.payload };
  
      default:
        return state;
    }
  };