import Missions from './missions-state';
import {MISSIONS_ACTIONS} from './missions-actions';
import {GAME_RESTARTED} from '../game-actions';

export default (state = Missions.initialState(), action)=> {
  switch(action.type){

    case GAME_RESTARTED:
      return Missions.resetMissions(state);

    case MISSIONS_ACTIONS.ADD_MISSION:
      return Missions.add(state, action.planet, action.vehicle);

    case MISSIONS_ACTIONS.REMOVE_MISSION:
      return Missions.remove(state, action.missionId);

    default :
      return state;
  }
};