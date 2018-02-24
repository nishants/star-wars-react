import {ADD_PLANET_TO_MISSION, REMOVE_PLANET_FROM_MISSION} from './planets-actions';
import Planets from './planets-state';

export default (state = Planets.initialState(), action) => {
  switch (action.type) {
    case ADD_PLANET_TO_MISSION:
      return Planets.addToMission(action.planetId);

    case REMOVE_PLANET_FROM_MISSION:
      return Planets.removeFromMission(action.planetId);

    default:
      return state;
  }
}