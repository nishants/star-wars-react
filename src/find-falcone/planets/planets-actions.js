import {remote, planetIcons} from '../../config';
import axios from 'axios';

export const PLANETS_LOADED  = 'PLANETS/PLANETS_LOADED';
export const ADDED_PLANET_TO_MISSION = 'PLANETS/ADDED_PLANET_TO_MISSION';
export const REMOVED_PLANET_FROM_MISSION = 'PLANETS/REMOVE_PLANET_FROM_MISSION';

export const loadPlanets = (dispatch)=> {
  axios.get(remote+'/planets').then(response=> {
    var planets = response.data.map(planet => ({...planet, img: planetIcons[planet.name]}));
    dispatch({type: PLANETS_LOADED, planets: planets});
  });
};

export const assignPlanet = planet => ({type: ADDED_PLANET_TO_MISSION, planetName: planet.name});

export const unAssignPlanet = planet => ({type: REMOVED_PLANET_FROM_MISSION, planetName: planet.name});
