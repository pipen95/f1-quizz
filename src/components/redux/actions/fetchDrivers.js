import FETCHING_DRIVERS from '../types/fetchingDrivers';
import NEW_DRIVERS from '../types/newDrivers';
import NEW_VOTE from '../types/newVote';

export const fetchDrivers = () => dispatch => {
  dispatch({ type: FETCHING_DRIVERS });
  fetch('http://localhost:3000/drivers')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_DRIVERS,
        drivers: data
      })
    )
    .catch(err => console.log(err));
};

export const addVote = i => {
  return {
    type: NEW_VOTE,
    i
  };
};
