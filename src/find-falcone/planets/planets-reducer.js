import {PLANET_ACTIONS, ADDED_PLANET_TO_MISSION, REMOVED_PLANET_FROM_MISSION} from './planets-actions';
import Planets from './planets-state';
import {GAME_RESTARTED} from '../game-actions';


export default (state = Planets.initialState(), action) => {

  switch (action.type) {

    case PLANET_ACTIONS.LOADED:
      return Planets.setPlanets(state, action.payload) ;

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