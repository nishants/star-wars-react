import {remote} from '../config';
import axios from 'axios';

export const ADD_PLANET_TO_MISSION = 'PLANETS/ADD_PLANET_TO_MISSION';
export const REMOVE_PLANET_FROM_MISSION = 'PLANETS/REMOVE_PLANET_FROM_MISSION';
export const PLANETS_FETCHED = 'PLANETS/PLANETS_FETCHED';

export const planetsFetched = (data)=> {
  return {type: PLANETS_FETCHED, planets: data.data}
};

export const fetchPlanets = ()=> {
  return axios.get(remote+'/planets');
};