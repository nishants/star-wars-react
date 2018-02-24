import {remote, planetIcons} from '../config';
import axios from 'axios';

export const ADD_PLANET_TO_MISSION = 'PLANETS/ADD_PLANET_TO_MISSION';
export const REMOVE_PLANET_FROM_MISSION = 'PLANETS/REMOVE_PLANET_FROM_MISSION';
export const PLANETS_FETCHED = 'PLANETS/PLANETS_FETCHED';

export const planetsFetched = (data)=> {
  var withPlanetIcon = planet=> ({...planet, img: planetIcons[planet.name]});
  return {type: PLANETS_FETCHED, planets: data.data.map(withPlanetIcon)};
};

export const fetchPlanets = ()=> {
  return axios.get(remote+'/planets');
};