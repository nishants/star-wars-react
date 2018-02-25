import {VEHICLES_LOADED, ADDED_VEHICLE_TO_MISSION, REMOVED_VEHICLE_TO_MISSION} from './vehicles-actions';
import Vehicles from './vehicles-state';
import {GAME_RESTARTED} from '../game-actions';

export default (state = Vehicles.initialState(), action) => {

  switch (action.type) {

    case VEHICLES_LOADED:
      return Vehicles.setVehicles(state, action.vehicles);

    case GAME_RESTARTED:
      return Vehicles.reset(state, action.vehicles);

    case ADDED_VEHICLE_TO_MISSION:
      return Vehicles.addedToMission(state, action.vehicleName);

    case REMOVED_VEHICLE_TO_MISSION:
      return Vehicles.removedFromMission(state, action.vehicleName);

    default:
      return state;
  }
}
