import {ADDED_PLANET_TO_MISSION, REMOVED_PLANET_FROM_MISSION, PLANETS_LOADED} from './planets-actions';
import Planets from './planets-state';
import {GAME_RESTARTED} from '../game-actions';


export default (state = Planets.initialState(), action) => {

  switch (action.type) {

    case PLANETS_LOADED:
      return Planets.setPlanets(state, action.planets) ;

    case GAME_RESTARTED:
      return Planets.resetPlanets(state);

    case ADDED_PLANET_TO_MISSION:
      return Planets.addToMission(state, action.planetName);

    case REMOVED_PLANET_FROM_MISSION:
      return Planets.removeFromMission(state, action.planetName);

    default:
      return state;
  }
}