import FETCHING_QUOTE from "../types/fetchingQuote";
import NEW_QUOTE from "../types/newQuote";

const fetchQuotes = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE });

  fetch("https://talaikis.com/api/quotes/random/")
    .then(Response => Response.json())
    .then(quote =>
      dispatch({
        type: NEW_QUOTE,
        payload: quote
      })
    );
};
export default fetchQuotes;
