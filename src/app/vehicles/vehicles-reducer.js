import {VEHICLES_FETCHED, ADDED_VEHICLE_TO_MISSION} from './vehicles-actions';
import Vehicles from './vehicles-state';
import {GAME_RESTARTED} from '../game-result/game-result-actions';

export default (state = Vehicles.initialState(), action) => {
  switch (action.type) {
    case GAME_RESTARTED:
      return Vehicles.reset(state, action.vehicles);

    case VEHICLES_FETCHED:
      return Vehicles.setVehicles(state, action.vehicles);

    case ADDED_VEHICLE_TO_MISSION:
      return Vehicles.addedToMission(state, action.vehicleName);

    default:
      return state;
  }
}
