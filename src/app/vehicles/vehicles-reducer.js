import {VEHICLES_FETCHED} from './vehicles-actions';
import Vehicles from './vehicles-state';

export default (state = Vehicles.initialState(), action) => {
  switch (action.type) {
    case VEHICLES_FETCHED:
      return Vehicles.setVehicles(action.data);


    default:
      return state;
  }
}