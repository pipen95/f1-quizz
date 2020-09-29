import FETCHING_DRIVERS from '../types/fetchingDrivers';
import NEW_DRIVERS from '../types/newDrivers';

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
