import {createMission} from '../missions/missions-actions'
import {assignPlanet}  from '../planets/planets-actions';
import {assignVehicle} from '../vehicles/vehicles-actions';

export const CREATE_NEW_MISSION = "CREATE-MISSIONS/CREATE_NEW_MISSION";
export const CANCEL_CREATING_MISSION = "CREATE-MISSIONS/CANCEL_CREATING_MISSION";
export const SELECT_PLANET  = "CREATE-MISSIONS/SELECT_PLANET";
export const SELECT_VEHICLE  = "CREATE-MISSIONS/SELECT_VEHICLE";

export const selectPlanet = planet => ({type: SELECT_PLANET, planet: planet});
export const selectVehicle = vehicle => ({type: SELECT_VEHICLE, vehicle: vehicle});
export const cancelCreatingMission = () => ({type: CANCEL_CREATING_MISSION});
export const createNewMission  = () => ({type: CREATE_NEW_MISSION});

export const sendMission = (dispatch, planet, vehicle)=> {
  dispatch(selectVehicle(planet))
  dispatch(assignPlanet(planet));
  dispatch(assignVehicle(vehicle));
  dispatch(createMission(planet, vehicle));
  dispatch(cancelCreatingMission);
};