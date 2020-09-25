import FETCHING_QUOTE from "../types/fetchingQuote";
import NEW_QUOTE from "../types/newQuote";

const defaultState = {
  quote: {},
  fetching: false
};

const quoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_QUOTE:
      return { ...state, fetching: true };

    case NEW_QUOTE:
      return { ...state, quote: action.payload, fetching: false };
    default:
      return state;
  }
};

export default quoteReducer;
