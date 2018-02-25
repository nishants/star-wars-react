import {remote, vehicleIcons} from '../config';
import axios from 'axios';

export const FETCH_VEHICLES   = 'VEHICLES/FETCH_VEHICLES';
export const VEHICLES_FETCHED = 'VEHICLES/VEHICLES_FETCHED';
export const ADDED_VEHICLE_TO_MISSION = 'VEHICLES/ADDED_VEHICLE_TO_MISSION';

export const vehiclesFetched = (data)=> {
  var withVehicleIcon = vehicle=> ({...vehicle, img: vehicleIcons[vehicle.name]});
  return {type: VEHICLES_FETCHED, vehicles: data.data.map(withVehicleIcon)};
};

export const fetchVehicles = ()=> {
  return axios.get(remote+'/vehicles');
};

export const assignVehicle = vehicle => ({type: ADDED_VEHICLE_TO_MISSION, vehicleName: vehicle.name});