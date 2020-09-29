import NEW_DRIVERS from '../types/newDrivers';

const defaultState = {
  drivers: []
};

const driversReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_DRIVERS:
      return {
        ...state,
        drivers: action.drivers
      };
    default:
      return state;
  }
};

export default driversReducer;
