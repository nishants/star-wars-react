import {ADDED_PLANET_TO_MISSION, REMOVE_PLANET_FROM_MISSION, PLANETS_FETCHED} from './planets-actions';
import Planets from './planets-state';
import {GAME_RESTARTED} from '../game-result/game-result-actions';


export default (state = Planets.initialState(), action) => {
  switch (action.type) {
    case GAME_RESTARTED:
      return Planets.resetPlanets(state, action.planetName);

    case ADDED_PLANET_TO_MISSION:
      return Planets.addToMission(state, action.planetName);

    case REMOVE_PLANET_FROM_MISSION:
      return Planets.removeFromMission(action.planetId);

    case PLANETS_FETCHED:
      return Planets.setPlanets(state, action.planets) ;

    default:
      return state;
  }
}