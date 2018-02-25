import {remote, vehicleIcons} from '../../config';
import axios from 'axios';

export const VEHICLES_LOADED = 'VEHICLES/VEHICLES_LOADED';
export const ADDED_VEHICLE_TO_MISSION = 'VEHICLES/ADDED_VEHICLE_TO_MISSION';
export const REMOVED_VEHICLE_TO_MISSION = 'VEHICLES/REMOVED_VEHICLE_TO_MISSION';

export const loadVehicles = (dispatch)=> {
  axios.get(remote+'/vehicles').then((response)=> {
    const vehicles = response.data.map(vehicle =>
            ({...vehicle, img : vehicleIcons[vehicle.name]}));

    dispatch({type: VEHICLES_LOADED, vehicles: vehicles});
  });
};

export const assignVehicle = vehicle => ({type: ADDED_VEHICLE_TO_MISSION, vehicleName: vehicle.name});
export const unAssignVehicle = vehicle => ({type: REMOVED_VEHICLE_TO_MISSION, vehicleName: vehicle.name});

